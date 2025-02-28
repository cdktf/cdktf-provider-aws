# `dataAwsLicensemanagerReceivedLicense` Submodule <a name="`dataAwsLicensemanagerReceivedLicense` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicense <a name="DataAwsLicensemanagerReceivedLicense" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license aws_licensemanager_received_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense(scope: Construct, id: string, config: DataAwsLicensemanagerReceivedLicenseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicense resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicense resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLicensemanagerReceivedLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary">beneficiary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements">entitlements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer">issuer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata">licenseMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName">licenseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku">productSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata">receivedMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity">validity</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput">licenseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn">licenseArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary"></a>

```typescript
public readonly beneficiary: string;
```

- *Type:* string

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration"></a>

```typescript
public readonly consumptionConfiguration: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements"></a>

```typescript
public readonly entitlements: DataAwsLicensemanagerReceivedLicenseEntitlementsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a>

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer"></a>

```typescript
public readonly issuer: DataAwsLicensemanagerReceivedLicenseIssuerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a>

---

##### `licenseMetadata`<sup>Required</sup> <a name="licenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata"></a>

```typescript
public readonly licenseMetadata: DataAwsLicensemanagerReceivedLicenseLicenseMetadataList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a>

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName"></a>

```typescript
public readonly licenseName: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku"></a>

```typescript
public readonly productSku: string;
```

- *Type:* string

---

##### `receivedMetadata`<sup>Required</sup> <a name="receivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata"></a>

```typescript
public readonly receivedMetadata: DataAwsLicensemanagerReceivedLicenseReceivedMetadataList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity"></a>

```typescript
public readonly validity: DataAwsLicensemanagerReceivedLicenseValidityList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseArnInput`<sup>Optional</sup> <a name="licenseArnInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput"></a>

```typescript
public readonly licenseArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn"></a>

```typescript
public readonly licenseArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicenseConfig <a name="DataAwsLicensemanagerReceivedLicenseConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseConfig: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn">licenseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn"></a>

```typescript
public readonly licenseArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/data-sources/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseConsumptionConfiguration: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration = { ... }
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration = { ... }
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration = { ... }
```


### DataAwsLicensemanagerReceivedLicenseEntitlements <a name="DataAwsLicensemanagerReceivedLicenseEntitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseEntitlements: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements = { ... }
```


### DataAwsLicensemanagerReceivedLicenseIssuer <a name="DataAwsLicensemanagerReceivedLicenseIssuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseIssuer: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer = { ... }
```


### DataAwsLicensemanagerReceivedLicenseLicenseMetadata <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseLicenseMetadata: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata = { ... }
```


### DataAwsLicensemanagerReceivedLicenseReceivedMetadata <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseReceivedMetadata: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata = { ... }
```


### DataAwsLicensemanagerReceivedLicenseValidity <a name="DataAwsLicensemanagerReceivedLicenseValidity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicenseValidity: dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowEarlyCheckIn`<sup>Required</sup> <a name="allowEarlyCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```typescript
public readonly allowEarlyCheckIn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType">renewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `borrowConfiguration`<sup>Required</sup> <a name="borrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```typescript
public readonly borrowConfiguration: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a>

---

##### `provisionalConfiguration`<sup>Required</sup> <a name="provisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```typescript
public readonly provisionalConfiguration: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a>

---

##### `renewType`<sup>Required</sup> <a name="renewType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```typescript
public readonly renewType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsList <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn">allowCheckIn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.overage">overage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCheckIn`<sup>Required</sup> <a name="allowCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```typescript
public readonly allowCheckIn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overage`<sup>Required</sup> <a name="overage" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.overage"></a>

```typescript
public readonly overage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseEntitlements;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a>

---


### DataAwsLicensemanagerReceivedLicenseIssuerList <a name="DataAwsLicensemanagerReceivedLicenseIssuerList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseIssuerOutputReference <a name="DataAwsLicensemanagerReceivedLicenseIssuerOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint">keyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey">signKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyFingerprint`<sup>Required</sup> <a name="keyFingerprint" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint"></a>

```typescript
public readonly keyFingerprint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signKey`<sup>Required</sup> <a name="signKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey"></a>

```typescript
public readonly signKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseIssuer;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a>

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataList <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseLicenseMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataList <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations">allowedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus">receivedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason">receivedStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOperations`<sup>Required</sup> <a name="allowedOperations" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations"></a>

```typescript
public readonly allowedOperations: string[];
```

- *Type:* string[]

---

##### `receivedStatus`<sup>Required</sup> <a name="receivedStatus" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus"></a>

```typescript
public readonly receivedStatus: string;
```

- *Type:* string

---

##### `receivedStatusReason`<sup>Required</sup> <a name="receivedStatusReason" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason"></a>

```typescript
public readonly receivedStatusReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseReceivedMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseValidityList <a name="DataAwsLicensemanagerReceivedLicenseValidityList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicenseValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseValidityOutputReference <a name="DataAwsLicensemanagerReceivedLicenseValidityOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicense } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin">begin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin"></a>

```typescript
public readonly begin: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLicensemanagerReceivedLicenseValidity;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a>

---



