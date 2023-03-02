# `dataAwsKendraThesaurus` Submodule <a name="`dataAwsKendraThesaurus` Submodule" id="@cdktf/provider-aws.dataAwsKendraThesaurus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraThesaurus <a name="DataAwsKendraThesaurus" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus aws_kendra_thesaurus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

new dataAwsKendraThesaurus.DataAwsKendraThesaurus(scope: Construct, id: string, config: DataAwsKendraThesaurusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig">DataAwsKendraThesaurusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig">DataAwsKendraThesaurusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isConstruct"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

dataAwsKendraThesaurus.DataAwsKendraThesaurus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformElement"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformDataSource"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.fileSizeBytes">fileSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList">DataAwsKendraThesaurusSourceS3PathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.synonymRuleCount">synonymRuleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.termCount">termCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.thesaurusIdInput">thesaurusIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.thesaurusId">thesaurusId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: DataAwsKendraThesaurusSourceS3PathList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList">DataAwsKendraThesaurusSourceS3PathList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `synonymRuleCount`<sup>Required</sup> <a name="synonymRuleCount" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.synonymRuleCount"></a>

```typescript
public readonly synonymRuleCount: number;
```

- *Type:* number

---

##### `termCount`<sup>Required</sup> <a name="termCount" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.termCount"></a>

```typescript
public readonly termCount: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `thesaurusIdInput`<sup>Optional</sup> <a name="thesaurusIdInput" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.thesaurusIdInput"></a>

```typescript
public readonly thesaurusIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `thesaurusId`<sup>Required</sup> <a name="thesaurusId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.thesaurusId"></a>

```typescript
public readonly thesaurusId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraThesaurusConfig <a name="DataAwsKendraThesaurusConfig" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.Initializer"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

const dataAwsKendraThesaurusConfig: dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#index_id DataAwsKendraThesaurus#index_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.thesaurusId">thesaurusId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#thesaurus_id DataAwsKendraThesaurus#thesaurus_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#id DataAwsKendraThesaurus#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#tags DataAwsKendraThesaurus#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#index_id DataAwsKendraThesaurus#index_id}.

---

##### `thesaurusId`<sup>Required</sup> <a name="thesaurusId" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.thesaurusId"></a>

```typescript
public readonly thesaurusId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#thesaurus_id DataAwsKendraThesaurus#thesaurus_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#id DataAwsKendraThesaurus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_thesaurus#tags DataAwsKendraThesaurus#tags}.

---

### DataAwsKendraThesaurusSourceS3Path <a name="DataAwsKendraThesaurusSourceS3Path" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3Path.Initializer"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

const dataAwsKendraThesaurusSourceS3Path: dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3Path = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraThesaurusSourceS3PathList <a name="DataAwsKendraThesaurusSourceS3PathList" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

new dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.get"></a>

```typescript
public get(index: number): DataAwsKendraThesaurusSourceS3PathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsKendraThesaurusSourceS3PathOutputReference <a name="DataAwsKendraThesaurusSourceS3PathOutputReference" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer"></a>

```typescript
import { dataAwsKendraThesaurus } from '@cdktf/provider-aws'

new dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3Path">DataAwsKendraThesaurusSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3PathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKendraThesaurusSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraThesaurus.DataAwsKendraThesaurusSourceS3Path">DataAwsKendraThesaurusSourceS3Path</a>

---



