# `dataAwsFsxOntapStorageVirtualMachines` Submodule <a name="`dataAwsFsxOntapStorageVirtualMachines` Submodule" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOntapStorageVirtualMachines <a name="DataAwsFsxOntapStorageVirtualMachines" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines aws_fsx_ontap_storage_virtual_machines}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

new dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines(scope: Construct, id: string, config?: DataAwsFsxOntapStorageVirtualMachinesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig">DataAwsFsxOntapStorageVirtualMachinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig">DataAwsFsxOntapStorageVirtualMachinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsFsxOntapStorageVirtualMachinesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachines resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isConstruct"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformElement"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformDataSource"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxOntapStorageVirtualMachines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxOntapStorageVirtualMachines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxOntapStorageVirtualMachines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList">DataAwsFsxOntapStorageVirtualMachinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.filter"></a>

```typescript
public readonly filter: DataAwsFsxOntapStorageVirtualMachinesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList">DataAwsFsxOntapStorageVirtualMachinesFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsFsxOntapStorageVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachines.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOntapStorageVirtualMachinesConfig <a name="DataAwsFsxOntapStorageVirtualMachinesConfig" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.Initializer"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

const dataAwsFsxOntapStorageVirtualMachinesConfig: dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#id DataAwsFsxOntapStorageVirtualMachines#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsFsxOntapStorageVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#filter DataAwsFsxOntapStorageVirtualMachines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#id DataAwsFsxOntapStorageVirtualMachines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsFsxOntapStorageVirtualMachinesFilter <a name="DataAwsFsxOntapStorageVirtualMachinesFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter.Initializer"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

const dataAwsFsxOntapStorageVirtualMachinesFilter: dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#name DataAwsFsxOntapStorageVirtualMachines#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#values DataAwsFsxOntapStorageVirtualMachines#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#name DataAwsFsxOntapStorageVirtualMachines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/fsx_ontap_storage_virtual_machines#values DataAwsFsxOntapStorageVirtualMachines#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOntapStorageVirtualMachinesFilterList <a name="DataAwsFsxOntapStorageVirtualMachinesFilterList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

new dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.get"></a>

```typescript
public get(index: number): DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsFsxOntapStorageVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>[]

---


### DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference <a name="DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOntapStorageVirtualMachines } from '@cdktf/provider-aws'

new dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsFsxOntapStorageVirtualMachinesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachines.DataAwsFsxOntapStorageVirtualMachinesFilter">DataAwsFsxOntapStorageVirtualMachinesFilter</a>

---



