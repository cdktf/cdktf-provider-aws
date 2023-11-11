# `data_aws_ec2_public_ipv4_pool`

Refer to the Terraform Registory for docs: [`data_aws_ec2_public_ipv4_pool`](https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool).

# `dataAwsEc2PublicIpv4Pool` Submodule <a name="`dataAwsEc2PublicIpv4Pool` Submodule" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pool <a name="DataAwsEc2PublicIpv4Pool" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool(scope: Construct, id: string, config: DataAwsEc2PublicIpv4PoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2PublicIpv4Pool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2PublicIpv4Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2PublicIpv4Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup">networkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges">poolAddressRanges</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount">totalAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount">totalAvailableAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `networkBorderGroup`<sup>Required</sup> <a name="networkBorderGroup" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup"></a>

```typescript
public readonly networkBorderGroup: string;
```

- *Type:* string

---

##### `poolAddressRanges`<sup>Required</sup> <a name="poolAddressRanges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges"></a>

```typescript
public readonly poolAddressRanges: DataAwsEc2PublicIpv4PoolPoolAddressRangesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a>

---

##### `totalAddressCount`<sup>Required</sup> <a name="totalAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount"></a>

```typescript
public readonly totalAddressCount: number;
```

- *Type:* number

---

##### `totalAvailableAddressCount`<sup>Required</sup> <a name="totalAvailableAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount"></a>

```typescript
public readonly totalAvailableAddressCount: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolConfig <a name="DataAwsEc2PublicIpv4PoolConfig" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

const dataAwsEc2PublicIpv4PoolConfig: dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId">poolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}.

---

### DataAwsEc2PublicIpv4PoolPoolAddressRanges <a name="DataAwsEc2PublicIpv4PoolPoolAddressRanges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

const dataAwsEc2PublicIpv4PoolPoolAddressRanges: dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolPoolAddressRangesList <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesList" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get"></a>

```typescript
public get(index: number): DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2PublicIpv4Pool } from '@cdktf/provider-aws'

new dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount">addressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount">availableAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress">firstAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress">lastAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressCount`<sup>Required</sup> <a name="addressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount"></a>

```typescript
public readonly addressCount: number;
```

- *Type:* number

---

##### `availableAddressCount`<sup>Required</sup> <a name="availableAddressCount" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount"></a>

```typescript
public readonly availableAddressCount: number;
```

- *Type:* number

---

##### `firstAddress`<sup>Required</sup> <a name="firstAddress" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress"></a>

```typescript
public readonly firstAddress: string;
```

- *Type:* string

---

##### `lastAddress`<sup>Required</sup> <a name="lastAddress" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress"></a>

```typescript
public readonly lastAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2PublicIpv4PoolPoolAddressRanges;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a>

---



