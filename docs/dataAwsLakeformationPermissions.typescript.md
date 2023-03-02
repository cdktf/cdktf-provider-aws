# `dataAwsLakeformationPermissions` Submodule <a name="`dataAwsLakeformationPermissions` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationPermissions <a name="DataAwsLakeformationPermissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissions(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation">putDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy">putLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource">resetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation">resetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy">resetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase"></a>

```typescript
public putDatabase(value: DataAwsLakeformationPermissionsDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `putDataLocation` <a name="putDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation"></a>

```typescript
public putDataLocation(value: DataAwsLakeformationPermissionsDataLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag"></a>

```typescript
public putLfTag(value: DataAwsLakeformationPermissionsLfTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `putLfTagPolicy` <a name="putLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy"></a>

```typescript
public putLfTagPolicy(value: DataAwsLakeformationPermissionsLfTagPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable"></a>

```typescript
public putTable(value: DataAwsLakeformationPermissionsTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetCatalogResource` <a name="resetCatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource"></a>

```typescript
public resetCatalogResource(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation"></a>

```typescript
public resetDataLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag"></a>

```typescript
public resetLfTag(): void
```

##### `resetLfTagPolicy` <a name="resetLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy"></a>

```typescript
public resetLfTagPolicy(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput">catalogResourceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput">dataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput">lfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput">lfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource">catalogResource</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal">principal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database"></a>

```typescript
public readonly database: DataAwsLakeformationPermissionsDatabaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation"></a>

```typescript
public readonly dataLocation: DataAwsLakeformationPermissionsDataLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag"></a>

```typescript
public readonly lfTag: DataAwsLakeformationPermissionsLfTagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: DataAwsLakeformationPermissionsLfTagPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption"></a>

```typescript
public readonly permissionsWithGrantOption: string[];
```

- *Type:* string[]

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table"></a>

```typescript
public readonly table: DataAwsLakeformationPermissionsTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: DataAwsLakeformationPermissionsTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `catalogResourceInput`<sup>Optional</sup> <a name="catalogResourceInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput"></a>

```typescript
public readonly catalogResourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput"></a>

```typescript
public readonly databaseInput: DataAwsLakeformationPermissionsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput"></a>

```typescript
public readonly dataLocationInput: DataAwsLakeformationPermissionsDataLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput"></a>

```typescript
public readonly lfTagInput: DataAwsLakeformationPermissionsLfTag;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `lfTagPolicyInput`<sup>Optional</sup> <a name="lfTagPolicyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput"></a>

```typescript
public readonly lfTagPolicyInput: DataAwsLakeformationPermissionsLfTagPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput"></a>

```typescript
public readonly tableInput: DataAwsLakeformationPermissionsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: DataAwsLakeformationPermissionsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `catalogResource`<sup>Required</sup> <a name="catalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource"></a>

```typescript
public readonly catalogResource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationPermissionsConfig <a name="DataAwsLakeformationPermissionsConfig" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsConfig: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource">catalogResource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `catalogResource`<sup>Optional</sup> <a name="catalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource"></a>

```typescript
public readonly catalogResource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database"></a>

```typescript
public readonly database: DataAwsLakeformationPermissionsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database DataAwsLakeformationPermissions#database}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation"></a>

```typescript
public readonly dataLocation: DataAwsLakeformationPermissionsDataLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag"></a>

```typescript
public readonly lfTag: DataAwsLakeformationPermissionsLfTag;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: DataAwsLakeformationPermissionsLfTagPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table"></a>

```typescript
public readonly table: DataAwsLakeformationPermissionsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table DataAwsLakeformationPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: DataAwsLakeformationPermissionsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}

---

### DataAwsLakeformationPermissionsDatabase <a name="DataAwsLakeformationPermissionsDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsDatabase: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsDataLocation <a name="DataAwsLakeformationPermissionsDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsDataLocation: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTag <a name="DataAwsLakeformationPermissionsLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsLfTag: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicy <a name="DataAwsLakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsLfTagPolicy: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression">expression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression"></a>

```typescript
public readonly expression: IResolvable | DataAwsLakeformationPermissionsLfTagPolicyExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#expression DataAwsLakeformationPermissions#expression}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicyExpression <a name="DataAwsLakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsLfTagPolicyExpression: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

### DataAwsLakeformationPermissionsTable <a name="DataAwsLakeformationPermissionsTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsTable: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

### DataAwsLakeformationPermissionsTableWithColumns <a name="DataAwsLakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

const dataAwsLakeformationPermissionsTableWithColumns: dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}.

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationPermissionsDatabaseOutputReference <a name="DataAwsLakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---


### DataAwsLakeformationPermissionsDataLocationOutputReference <a name="DataAwsLakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsDataLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---


### DataAwsLakeformationPermissionsLfTagOutputReference <a name="DataAwsLakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsLfTag;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionList <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```typescript
public get(index: number): DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsLakeformationPermissionsLfTagPolicyExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsLfTagPolicyExpression | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a> | cdktf.IResolvable

---


### DataAwsLakeformationPermissionsLfTagPolicyOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```typescript
public putExpression(value: IResolvable | DataAwsLakeformationPermissionsLfTagPolicyExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">expressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```typescript
public readonly expression: DataAwsLakeformationPermissionsLfTagPolicyExpressionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: IResolvable | DataAwsLakeformationPermissionsLfTagPolicyExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsLfTagPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---


### DataAwsLakeformationPermissionsTableOutputReference <a name="DataAwsLakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---


### DataAwsLakeformationPermissionsTableWithColumnsOutputReference <a name="DataAwsLakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationPermissions } from '@cdktf/provider-aws'

new dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationPermissionsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---



