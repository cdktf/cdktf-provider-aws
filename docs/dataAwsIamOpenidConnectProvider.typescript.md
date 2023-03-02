# `dataAwsIamOpenidConnectProvider` Submodule <a name="`dataAwsIamOpenidConnectProvider` Submodule" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamOpenidConnectProvider <a name="DataAwsIamOpenidConnectProvider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider aws_iam_openid_connect_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer"></a>

```typescript
import { dataAwsIamOpenidConnectProvider } from '@cdktf/provider-aws'

new dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider(scope: Construct, id: string, config?: DataAwsIamOpenidConnectProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig">DataAwsIamOpenidConnectProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig">DataAwsIamOpenidConnectProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct"></a>

```typescript
import { dataAwsIamOpenidConnectProvider } from '@cdktf/provider-aws'

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement"></a>

```typescript
import { dataAwsIamOpenidConnectProvider } from '@cdktf/provider-aws'

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource"></a>

```typescript
import { dataAwsIamOpenidConnectProvider } from '@cdktf/provider-aws'

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList">clientIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList">thumbprintList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientIdList`<sup>Required</sup> <a name="clientIdList" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList"></a>

```typescript
public readonly clientIdList: string[];
```

- *Type:* string[]

---

##### `thumbprintList`<sup>Required</sup> <a name="thumbprintList" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList"></a>

```typescript
public readonly thumbprintList: string[];
```

- *Type:* string[]

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamOpenidConnectProviderConfig <a name="DataAwsIamOpenidConnectProviderConfig" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.Initializer"></a>

```typescript
import { dataAwsIamOpenidConnectProvider } from '@cdktf/provider-aws'

const dataAwsIamOpenidConnectProviderConfig: dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}.

---



