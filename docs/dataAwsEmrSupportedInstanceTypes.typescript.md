# `dataAwsEmrSupportedInstanceTypes` Submodule <a name="`dataAwsEmrSupportedInstanceTypes` Submodule" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrSupportedInstanceTypes <a name="DataAwsEmrSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

new dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes(scope: Construct, id: string, config: DataAwsEmrSupportedInstanceTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig">DataAwsEmrSupportedInstanceTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig">DataAwsEmrSupportedInstanceTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes">putSupportedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetSupportedInstanceTypes">resetSupportedInstanceTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSupportedInstanceTypes` <a name="putSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes"></a>

```typescript
public putSupportedInstanceTypes(value: IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]

---

##### `resetSupportedInstanceTypes` <a name="resetSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetSupportedInstanceTypes"></a>

```typescript
public resetSupportedInstanceTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEmrSupportedInstanceTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEmrSupportedInstanceTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/emr_supported_instance_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEmrSupportedInstanceTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypes">supportedInstanceTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabelInput">releaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypesInput">supportedInstanceTypesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `supportedInstanceTypes`<sup>Required</sup> <a name="supportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypes"></a>

```typescript
public readonly supportedInstanceTypes: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList</a>

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabelInput"></a>

```typescript
public readonly releaseLabelInput: string;
```

- *Type:* string

---

##### `supportedInstanceTypesInput`<sup>Optional</sup> <a name="supportedInstanceTypesInput" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypesInput"></a>

```typescript
public readonly supportedInstanceTypesInput: IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrSupportedInstanceTypesConfig <a name="DataAwsEmrSupportedInstanceTypesConfig" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.Initializer"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

const dataAwsEmrSupportedInstanceTypesConfig: dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.supportedInstanceTypes">supportedInstanceTypes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]</code> | supported_instance_types block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}.

---

##### `supportedInstanceTypes`<sup>Optional</sup> <a name="supportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.supportedInstanceTypes"></a>

```typescript
public readonly supportedInstanceTypes: IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]

supported_instance_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/emr_supported_instance_types#supported_instance_types DataAwsEmrSupportedInstanceTypes#supported_instance_types}

---

### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes.Initializer"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

const dataAwsEmrSupportedInstanceTypesSupportedInstanceTypes: dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

new dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get"></a>

```typescript
public get(index: number): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>[]

---


### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsEmrSupportedInstanceTypes } from '@cdktf/provider-aws'

new dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedAvailable">ebsOptimizedAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedByDefault">ebsOptimizedByDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsStorageOnly">ebsStorageOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.instanceFamilyId">instanceFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.is64BitsOnly">is64BitsOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.vcpu">vcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `ebsOptimizedAvailable`<sup>Required</sup> <a name="ebsOptimizedAvailable" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedAvailable"></a>

```typescript
public readonly ebsOptimizedAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ebsOptimizedByDefault`<sup>Required</sup> <a name="ebsOptimizedByDefault" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedByDefault"></a>

```typescript
public readonly ebsOptimizedByDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ebsStorageOnly`<sup>Required</sup> <a name="ebsStorageOnly" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsStorageOnly"></a>

```typescript
public readonly ebsStorageOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `instanceFamilyId`<sup>Required</sup> <a name="instanceFamilyId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.instanceFamilyId"></a>

```typescript
public readonly instanceFamilyId: string;
```

- *Type:* string

---

##### `is64BitsOnly`<sup>Required</sup> <a name="is64BitsOnly" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.is64BitsOnly"></a>

```typescript
public readonly is64BitsOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes</a>

---



