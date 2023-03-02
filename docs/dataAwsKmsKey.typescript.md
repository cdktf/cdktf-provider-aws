# `dataAwsKmsKey` Submodule <a name="`dataAwsKmsKey` Submodule" id="@cdktf/provider-aws.dataAwsKmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsKey <a name="DataAwsKmsKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKey(scope: Construct, id: string, config: DataAwsKmsKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig">DataAwsKmsKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig">DataAwsKmsKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens">resetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetGrantTokens` <a name="resetGrantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens"></a>

```typescript
public resetGrantTokens(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

dataAwsKmsKey.DataAwsKmsKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

dataAwsKmsKey.DataAwsKmsKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec">customerMasterKeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate">deletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel">expirationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager">keyManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion">multiRegion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration">multiRegionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo">validTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput">grantTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `customerMasterKeySpec`<sup>Required</sup> <a name="customerMasterKeySpec" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec"></a>

```typescript
public readonly customerMasterKeySpec: string;
```

- *Type:* string

---

##### `deletionDate`<sup>Required</sup> <a name="deletionDate" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate"></a>

```typescript
public readonly deletionDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expirationModel`<sup>Required</sup> <a name="expirationModel" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel"></a>

```typescript
public readonly expirationModel: string;
```

- *Type:* string

---

##### `keyManager`<sup>Required</sup> <a name="keyManager" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager"></a>

```typescript
public readonly keyManager: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion"></a>

```typescript
public readonly multiRegion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `multiRegionConfiguration`<sup>Required</sup> <a name="multiRegionConfiguration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration"></a>

```typescript
public readonly multiRegionConfiguration: DataAwsKmsKeyMultiRegionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `validTo`<sup>Required</sup> <a name="validTo" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo"></a>

```typescript
public readonly validTo: string;
```

- *Type:* string

---

##### `grantTokensInput`<sup>Optional</sup> <a name="grantTokensInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput"></a>

```typescript
public readonly grantTokensInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `grantTokens`<sup>Required</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsKeyConfig <a name="DataAwsKmsKeyConfig" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

const dataAwsKmsKeyConfig: dataAwsKmsKey.DataAwsKmsKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}.

---

##### `grantTokens`<sup>Optional</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsKmsKeyMultiRegionConfiguration <a name="DataAwsKmsKeyMultiRegionConfiguration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

const dataAwsKmsKeyMultiRegionConfiguration: dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration = { ... }
```


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKey <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

const dataAwsKmsKeyMultiRegionConfigurationPrimaryKey: dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = { ... }
```


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeys <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

const dataAwsKmsKeyMultiRegionConfigurationReplicaKeys: dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKmsKeyMultiRegionConfigurationList <a name="DataAwsKmsKeyMultiRegionConfigurationList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsKmsKeyMultiRegionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsKmsKeyMultiRegionConfigurationOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType">multiRegionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey">primaryKey</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys">replicaKeys</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiRegionKeyType`<sup>Required</sup> <a name="multiRegionKeyType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType"></a>

```typescript
public readonly multiRegionKeyType: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a>

---

##### `replicaKeys`<sup>Required</sup> <a name="replicaKeys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys"></a>

```typescript
public readonly replicaKeys: DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKmsKeyMultiRegionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a>

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get"></a>

```typescript
public get(index: number): DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKmsKeyMultiRegionConfigurationPrimaryKey;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a>

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get"></a>

```typescript
public get(index: number): DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer"></a>

```typescript
import { dataAwsKmsKey } from '@cdktf/provider-aws'

new dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKmsKeyMultiRegionConfigurationReplicaKeys;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a>

---



