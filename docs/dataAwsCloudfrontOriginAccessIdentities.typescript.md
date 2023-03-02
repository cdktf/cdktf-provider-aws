# `dataAwsCloudfrontOriginAccessIdentities` Submodule <a name="`dataAwsCloudfrontOriginAccessIdentities` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginAccessIdentities <a name="DataAwsCloudfrontOriginAccessIdentities" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginAccessIdentities } from '@cdktf/provider-aws'

new dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities(scope: Construct, id: string, config?: DataAwsCloudfrontOriginAccessIdentitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig">DataAwsCloudfrontOriginAccessIdentitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig">DataAwsCloudfrontOriginAccessIdentitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetComments">resetComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComments` <a name="resetComments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetComments"></a>

```typescript
public resetComments(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct"></a>

```typescript
import { dataAwsCloudfrontOriginAccessIdentities } from '@cdktf/provider-aws'

dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontOriginAccessIdentities } from '@cdktf/provider-aws'

dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontOriginAccessIdentities } from '@cdktf/provider-aws'

dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.iamArns">iamArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.s3CanonicalUserIds">s3CanonicalUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.commentsInput">commentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.comments">comments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `iamArns`<sup>Required</sup> <a name="iamArns" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.iamArns"></a>

```typescript
public readonly iamArns: string[];
```

- *Type:* string[]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `s3CanonicalUserIds`<sup>Required</sup> <a name="s3CanonicalUserIds" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.s3CanonicalUserIds"></a>

```typescript
public readonly s3CanonicalUserIds: string[];
```

- *Type:* string[]

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.commentsInput"></a>

```typescript
public readonly commentsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.comments"></a>

```typescript
public readonly comments: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginAccessIdentitiesConfig <a name="DataAwsCloudfrontOriginAccessIdentitiesConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginAccessIdentities } from '@cdktf/provider-aws'

const dataAwsCloudfrontOriginAccessIdentitiesConfig: dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.comments">comments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities#id DataAwsCloudfrontOriginAccessIdentities#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.comments"></a>

```typescript
public readonly comments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities#id DataAwsCloudfrontOriginAccessIdentities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



