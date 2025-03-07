# `dataAwsRedshiftProducerDataShares` Submodule <a name="`dataAwsRedshiftProducerDataShares` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftProducerDataShares <a name="DataAwsRedshiftProducerDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares(scope: Construct, id: string, config: DataAwsRedshiftProducerDataSharesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig">DataAwsRedshiftProducerDataSharesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig">DataAwsRedshiftProducerDataSharesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares">putDataShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetDataShares">resetDataShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataShares` <a name="putDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares"></a>

```typescript
public putDataShares(value: IResolvable | DataAwsRedshiftProducerDataSharesDataShares[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]

---

##### `resetDataShares` <a name="resetDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetDataShares"></a>

```typescript
public resetDataShares(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRedshiftProducerDataShares that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares">dataShares</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataSharesInput">dataSharesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput">producerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn">producerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataShares`<sup>Required</sup> <a name="dataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares"></a>

```typescript
public readonly dataShares: DataAwsRedshiftProducerDataSharesDataSharesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `dataSharesInput`<sup>Optional</sup> <a name="dataSharesInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataSharesInput"></a>

```typescript
public readonly dataSharesInput: IResolvable | DataAwsRedshiftProducerDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]

---

##### `producerArnInput`<sup>Optional</sup> <a name="producerArnInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput"></a>

```typescript
public readonly producerArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn"></a>

```typescript
public readonly producerArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftProducerDataSharesConfig <a name="DataAwsRedshiftProducerDataSharesConfig" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

const dataAwsRedshiftProducerDataSharesConfig: dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn">producerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dataShares">dataShares</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]</code> | data_shares block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn"></a>

```typescript
public readonly producerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `dataShares`<sup>Optional</sup> <a name="dataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dataShares"></a>

```typescript
public readonly dataShares: IResolvable | DataAwsRedshiftProducerDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]

data_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#data_shares DataAwsRedshiftProducerDataShares#data_shares}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

### DataAwsRedshiftProducerDataSharesDataShares <a name="DataAwsRedshiftProducerDataSharesDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares.Initializer"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

const dataAwsRedshiftProducerDataSharesDataShares: dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftProducerDataSharesDataSharesList <a name="DataAwsRedshiftProducerDataSharesDataSharesList" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftProducerDataSharesDataSharesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRedshiftProducerDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>[]

---


### DataAwsRedshiftProducerDataSharesDataSharesOutputReference <a name="DataAwsRedshiftProducerDataSharesDataSharesOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftProducerDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy">managedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn">producerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy"></a>

```typescript
public readonly managedBy: string;
```

- *Type:* string

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn"></a>

```typescript
public readonly producerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRedshiftProducerDataSharesDataShares;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>

---



