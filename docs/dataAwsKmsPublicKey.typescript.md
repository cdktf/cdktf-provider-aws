# `dataAwsKmsPublicKey` Submodule <a name="`dataAwsKmsPublicKey` Submodule" id="@cdktf/provider-aws.dataAwsKmsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsPublicKey <a name="DataAwsKmsPublicKey" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key aws_kms_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

new dataAwsKmsPublicKey.DataAwsKmsPublicKey(scope: Construct, id: string, config: DataAwsKmsPublicKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig">DataAwsKmsPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig">DataAwsKmsPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetGrantTokens">resetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetGrantTokens` <a name="resetGrantTokens" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetGrantTokens"></a>

```typescript
public resetGrantTokens(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsKmsPublicKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isConstruct"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

dataAwsKmsPublicKey.DataAwsKmsPublicKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformElement"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformDataSource"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsKmsPublicKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsKmsPublicKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsKmsPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsKmsPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.customerMasterKeySpec">customerMasterKeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.encryptionAlgorithms">encryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.publicKeyPem">publicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.signingAlgorithms">signingAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.grantTokensInput">grantTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customerMasterKeySpec`<sup>Required</sup> <a name="customerMasterKeySpec" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.customerMasterKeySpec"></a>

```typescript
public readonly customerMasterKeySpec: string;
```

- *Type:* string

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="encryptionAlgorithms" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.encryptionAlgorithms"></a>

```typescript
public readonly encryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.publicKeyPem"></a>

```typescript
public readonly publicKeyPem: string;
```

- *Type:* string

---

##### `signingAlgorithms`<sup>Required</sup> <a name="signingAlgorithms" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.signingAlgorithms"></a>

```typescript
public readonly signingAlgorithms: string[];
```

- *Type:* string[]

---

##### `grantTokensInput`<sup>Optional</sup> <a name="grantTokensInput" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.grantTokensInput"></a>

```typescript
public readonly grantTokensInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `grantTokens`<sup>Required</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsPublicKeyConfig <a name="DataAwsKmsPublicKeyConfig" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.Initializer"></a>

```typescript
import { dataAwsKmsPublicKey } from '@cdktf/provider-aws'

const dataAwsKmsPublicKeyConfig: dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#key_id DataAwsKmsPublicKey#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#grant_tokens DataAwsKmsPublicKey#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#id DataAwsKmsPublicKey#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#key_id DataAwsKmsPublicKey#key_id}.

---

##### `grantTokens`<sup>Optional</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#grant_tokens DataAwsKmsPublicKey#grant_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#id DataAwsKmsPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsPublicKey.DataAwsKmsPublicKeyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_public_key#region DataAwsKmsPublicKey#region}

---



