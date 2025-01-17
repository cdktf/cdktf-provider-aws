# `dataAwsLicensemanagerReceivedLicenses` Submodule <a name="`dataAwsLicensemanagerReceivedLicenses` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicenses <a name="DataAwsLicensemanagerReceivedLicenses" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses aws_licensemanager_received_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses(scope: Construct, id: string, config?: DataAwsLicensemanagerReceivedLicensesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig">DataAwsLicensemanagerReceivedLicensesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig">DataAwsLicensemanagerReceivedLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsLicensemanagerReceivedLicensesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicenses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLicensemanagerReceivedLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter"></a>

```typescript
public readonly filter: DataAwsLicensemanagerReceivedLicensesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsLicensemanagerReceivedLicensesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicensesConfig <a name="DataAwsLicensemanagerReceivedLicensesConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicensesConfig: dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsLicensemanagerReceivedLicensesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#filter DataAwsLicensemanagerReceivedLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicensesFilter <a name="DataAwsLicensemanagerReceivedLicensesFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

const dataAwsLicensemanagerReceivedLicensesFilter: dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicensesFilterList <a name="DataAwsLicensemanagerReceivedLicensesFilterList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get"></a>

```typescript
public get(index: number): DataAwsLicensemanagerReceivedLicensesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsLicensemanagerReceivedLicensesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>[]

---


### DataAwsLicensemanagerReceivedLicensesFilterOutputReference <a name="DataAwsLicensemanagerReceivedLicensesFilterOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsLicensemanagerReceivedLicenses } from '@cdktf/provider-aws'

new dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsLicensemanagerReceivedLicensesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>

---



