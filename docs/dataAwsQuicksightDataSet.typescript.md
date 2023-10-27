# `data_aws_quicksight_data_set`

Refer to the Terraform Registory for docs: [`data_aws_quicksight_data_set`](https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set).

# `dataAwsQuicksightDataSet` Submodule <a name="`dataAwsQuicksightDataSet` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightDataSet <a name="DataAwsQuicksightDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set aws_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSet(scope: Construct, id: string, config: DataAwsQuicksightDataSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules">putColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules">resetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putColumnLevelPermissionRules` <a name="putColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules"></a>

```typescript
public putColumnLevelPermissionRules(value: IResolvable | DataAwsQuicksightDataSetColumnLevelPermissionRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetColumnLevelPermissionRules` <a name="resetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules"></a>

```typescript
public resetColumnLevelPermissionRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsQuicksightDataSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsQuicksightDataSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsQuicksightDataSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsQuicksightDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsQuicksightDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups">columnGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules">columnLevelPermissionRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration">dataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders">fieldFolders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode">importMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap">logicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap">physicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet">rowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration">rowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput">columnLevelPermissionRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput">dataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId">dataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `columnGroups`<sup>Required</sup> <a name="columnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups"></a>

```typescript
public readonly columnGroups: DataAwsQuicksightDataSetColumnGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a>

---

##### `columnLevelPermissionRules`<sup>Required</sup> <a name="columnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules"></a>

```typescript
public readonly columnLevelPermissionRules: DataAwsQuicksightDataSetColumnLevelPermissionRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `dataSetUsageConfiguration`<sup>Required</sup> <a name="dataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration"></a>

```typescript
public readonly dataSetUsageConfiguration: DataAwsQuicksightDataSetDataSetUsageConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a>

---

##### `fieldFolders`<sup>Required</sup> <a name="fieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders"></a>

```typescript
public readonly fieldFolders: DataAwsQuicksightDataSetFieldFoldersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a>

---

##### `importMode`<sup>Required</sup> <a name="importMode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode"></a>

```typescript
public readonly importMode: string;
```

- *Type:* string

---

##### `logicalTableMap`<sup>Required</sup> <a name="logicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap"></a>

```typescript
public readonly logicalTableMap: DataAwsQuicksightDataSetLogicalTableMapList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions"></a>

```typescript
public readonly permissions: DataAwsQuicksightDataSetPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a>

---

##### `physicalTableMap`<sup>Required</sup> <a name="physicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap"></a>

```typescript
public readonly physicalTableMap: DataAwsQuicksightDataSetPhysicalTableMapList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a>

---

##### `rowLevelPermissionDataSet`<sup>Required</sup> <a name="rowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```typescript
public readonly rowLevelPermissionDataSet: DataAwsQuicksightDataSetRowLevelPermissionDataSetList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a>

---

##### `rowLevelPermissionTagConfiguration`<sup>Required</sup> <a name="rowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration"></a>

```typescript
public readonly rowLevelPermissionTagConfiguration: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `columnLevelPermissionRulesInput`<sup>Optional</sup> <a name="columnLevelPermissionRulesInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```typescript
public readonly columnLevelPermissionRulesInput: IResolvable | DataAwsQuicksightDataSetColumnLevelPermissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput"></a>

```typescript
public readonly dataSetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightDataSetColumnGroups <a name="DataAwsQuicksightDataSetColumnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetColumnGroups: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups = { ... }
```


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup = { ... }
```


### DataAwsQuicksightDataSetColumnLevelPermissionRules <a name="DataAwsQuicksightDataSetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetColumnLevelPermissionRules: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules = { ... }
```


### DataAwsQuicksightDataSetConfig <a name="DataAwsQuicksightDataSetConfig" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetConfig: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId">dataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules">columnLevelPermissionRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]</code> | column_level_permission_rules block. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#id DataAwsQuicksightDataSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}.

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="columnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```typescript
public readonly columnLevelPermissionRules: IResolvable | DataAwsQuicksightDataSetColumnLevelPermissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]

column_level_permission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#column_level_permission_rules DataAwsQuicksightDataSet#column_level_permission_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#id DataAwsQuicksightDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}.

---

### DataAwsQuicksightDataSetDataSetUsageConfiguration <a name="DataAwsQuicksightDataSetDataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetDataSetUsageConfiguration: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration = { ... }
```


### DataAwsQuicksightDataSetFieldFolders <a name="DataAwsQuicksightDataSetFieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetFieldFolders: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMap <a name="DataAwsQuicksightDataSetLogicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMap: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransforms <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransforms: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapSource <a name="DataAwsQuicksightDataSetLogicalTableMapSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapSource: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties = { ... }
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties = { ... }
```


### DataAwsQuicksightDataSetPermissions <a name="DataAwsQuicksightDataSetPermissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPermissions: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMap <a name="DataAwsQuicksightDataSetPhysicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMap: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSql <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapCustomSql: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTable <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapRelationalTable: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapS3Source <a name="DataAwsQuicksightDataSetPhysicalTableMapS3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapS3Source: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns = { ... }
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings = { ... }
```


### DataAwsQuicksightDataSetRowLevelPermissionDataSet <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetRowLevelPermissionDataSet: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet = { ... }
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetRowLevelPermissionTagConfiguration: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration = { ... }
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

const dataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules: dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### DataAwsQuicksightDataSetColumnGroupsList <a name="DataAwsQuicksightDataSetColumnGroupsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetColumnGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetColumnGroupsOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">geoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoSpatialColumnGroup`<sup>Required</sup> <a name="geoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```typescript
public readonly geoSpatialColumnGroup: DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetColumnGroups;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a>

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesList <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsQuicksightDataSetColumnLevelPermissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>[]

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsQuicksightDataSetColumnLevelPermissionRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules">DataAwsQuicksightDataSetColumnLevelPermissionRules</a>

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationList <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">disableUseAsDirectQuerySource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">disableUseAsImportedSource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableUseAsDirectQuerySource`<sup>Required</sup> <a name="disableUseAsDirectQuerySource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```typescript
public readonly disableUseAsDirectQuerySource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disableUseAsImportedSource`<sup>Required</sup> <a name="disableUseAsImportedSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```typescript
public readonly disableUseAsImportedSource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetDataSetUsageConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a>

---


### DataAwsQuicksightDataSetFieldFoldersList <a name="DataAwsQuicksightDataSetFieldFoldersList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetFieldFoldersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetFieldFoldersOutputReference <a name="DataAwsQuicksightDataSetFieldFoldersOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId">fieldFoldersId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fieldFoldersId`<sup>Required</sup> <a name="fieldFoldersId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId"></a>

```typescript
public readonly fieldFoldersId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetFieldFolders;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">newColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `newColumnType`<sup>Required</sup> <a name="newColumnType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```typescript
public readonly newColumnType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">columnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnId`<sup>Required</sup> <a name="columnId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```typescript
public readonly columnId: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```typescript
public readonly columns: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">castColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">createColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">filterOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">projectOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">renameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">tagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation">untagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `castColumnTypeOperation`<sup>Required</sup> <a name="castColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```typescript
public readonly castColumnTypeOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a>

---

##### `createColumnsOperation`<sup>Required</sup> <a name="createColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```typescript
public readonly createColumnsOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a>

---

##### `filterOperation`<sup>Required</sup> <a name="filterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```typescript
public readonly filterOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a>

---

##### `projectOperation`<sup>Required</sup> <a name="projectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```typescript
public readonly projectOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a>

---

##### `renameColumnOperation`<sup>Required</sup> <a name="renameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```typescript
public readonly renameColumnOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a>

---

##### `tagColumnOperation`<sup>Required</sup> <a name="tagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```typescript
public readonly tagColumnOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a>

---

##### `untagColumnOperation`<sup>Required</sup> <a name="untagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation"></a>

```typescript
public readonly untagColumnOperation: DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransforms;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">projectedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectedColumns`<sup>Required</sup> <a name="projectedColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```typescript
public readonly projectedColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">newColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `newColumnName`<sup>Required</sup> <a name="newColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```typescript
public readonly newColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">columnDescription</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">columnGeographicRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnDescription`<sup>Required</sup> <a name="columnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```typescript
public readonly columnDescription: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a>

---

##### `columnGeographicRole`<sup>Required</sup> <a name="columnGeographicRole" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```typescript
public readonly columnGeographicRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames">tagNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `tagNames`<sup>Required</sup> <a name="tagNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapList <a name="DataAwsQuicksightDataSetLogicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">dataTransforms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId">logicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `dataTransforms`<sup>Required</sup> <a name="dataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```typescript
public readonly dataTransforms: DataAwsQuicksightDataSetLogicalTableMapDataTransformsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `logicalTableMapId`<sup>Required</sup> <a name="logicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId"></a>

```typescript
public readonly logicalTableMapId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsQuicksightDataSetLogicalTableMapSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMap;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">leftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">leftOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">onClause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">rightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">rightOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leftJoinKeyProperties`<sup>Required</sup> <a name="leftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```typescript
public readonly leftJoinKeyProperties: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a>

---

##### `leftOperand`<sup>Required</sup> <a name="leftOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```typescript
public readonly leftOperand: string;
```

- *Type:* string

---

##### `onClause`<sup>Required</sup> <a name="onClause" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```typescript
public readonly onClause: string;
```

- *Type:* string

---

##### `rightJoinKeyProperties`<sup>Required</sup> <a name="rightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```typescript
public readonly rightJoinKeyProperties: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a>

---

##### `rightOperand`<sup>Required</sup> <a name="rightOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```typescript
public readonly rightOperand: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">joinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">physicalTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `joinInstruction`<sup>Required</sup> <a name="joinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```typescript
public readonly joinInstruction: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a>

---

##### `physicalTableId`<sup>Required</sup> <a name="physicalTableId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```typescript
public readonly physicalTableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetLogicalTableMapSource;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a>

---


### DataAwsQuicksightDataSetPermissionsList <a name="DataAwsQuicksightDataSetPermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPermissionsOutputReference <a name="DataAwsQuicksightDataSetPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">sqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```typescript
public readonly columns: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sqlQuery`<sup>Required</sup> <a name="sqlQuery" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```typescript
public readonly sqlQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapCustomSql;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapList <a name="DataAwsQuicksightDataSetPhysicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql">customSql</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId">physicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">relationalTable</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">s3Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSql`<sup>Required</sup> <a name="customSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```typescript
public readonly customSql: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a>

---

##### `physicalTableMapId`<sup>Required</sup> <a name="physicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId"></a>

```typescript
public readonly physicalTableMapId: string;
```

- *Type:* string

---

##### `relationalTable`<sup>Required</sup> <a name="relationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```typescript
public readonly relationalTable: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a>

---

##### `s3Source`<sup>Required</sup> <a name="s3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```typescript
public readonly s3Source: DataAwsQuicksightDataSetPhysicalTableMapS3SourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMap;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">inputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```typescript
public readonly inputColumns: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapRelationalTable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">inputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">uploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```typescript
public readonly inputColumns: DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `uploadSettings`<sup>Required</sup> <a name="uploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```typescript
public readonly uploadSettings: DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapS3Source;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">containsHeader</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">startFromRow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">textQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```typescript
public readonly containsHeader: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `startFromRow`<sup>Required</sup> <a name="startFromRow" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```typescript
public readonly startFromRow: number;
```

- *Type:* number

---

##### `textQualifier`<sup>Required</sup> <a name="textQualifier" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```typescript
public readonly textQualifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetList <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">formatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">permissionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```typescript
public readonly formatVersion: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `permissionPolicy`<sup>Required</sup> <a name="permissionPolicy" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```typescript
public readonly permissionPolicy: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetRowLevelPermissionDataSet;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules">tagRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagRules`<sup>Required</sup> <a name="tagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules"></a>

```typescript
public readonly tagRules: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightDataSet } from '@cdktf/provider-aws'

new dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue">matchAllValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter">tagMultiValueDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `matchAllValue`<sup>Required</sup> <a name="matchAllValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue"></a>

```typescript
public readonly matchAllValue: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagMultiValueDelimiter`<sup>Required</sup> <a name="tagMultiValueDelimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter"></a>

```typescript
public readonly tagMultiValueDelimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a>

---



