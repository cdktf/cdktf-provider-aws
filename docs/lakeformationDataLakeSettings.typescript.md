# `lakeformationDataLakeSettings` Submodule <a name="`lakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.lakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataLakeSettings <a name="LakeformationDataLakeSettings" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

new lakeformationDataLakeSettings.LakeformationDataLakeSettings(scope: Construct, id: string, config?: LakeformationDataLakeSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig">LakeformationDataLakeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig">LakeformationDataLakeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions">putCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions">putCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins">resetAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowExternalDataFiltering">resetAllowExternalDataFiltering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowFullTableExternalDataAccess">resetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAuthorizedSessionTagValueList">resetAuthorizedSessionTagValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions">resetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions">resetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetExternalDataFilteringAllowList">resetExternalDataFilteringAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetReadOnlyAdmins">resetReadOnlyAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners">resetTrustedResourceOwners</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreateDatabaseDefaultPermissions` <a name="putCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions"></a>

```typescript
public putCreateDatabaseDefaultPermissions(value: IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]

---

##### `putCreateTableDefaultPermissions` <a name="putCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions"></a>

```typescript
public putCreateTableDefaultPermissions(value: IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]

---

##### `resetAdmins` <a name="resetAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins"></a>

```typescript
public resetAdmins(): void
```

##### `resetAllowExternalDataFiltering` <a name="resetAllowExternalDataFiltering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowExternalDataFiltering"></a>

```typescript
public resetAllowExternalDataFiltering(): void
```

##### `resetAllowFullTableExternalDataAccess` <a name="resetAllowFullTableExternalDataAccess" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowFullTableExternalDataAccess"></a>

```typescript
public resetAllowFullTableExternalDataAccess(): void
```

##### `resetAuthorizedSessionTagValueList` <a name="resetAuthorizedSessionTagValueList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAuthorizedSessionTagValueList"></a>

```typescript
public resetAuthorizedSessionTagValueList(): void
```

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetCreateDatabaseDefaultPermissions` <a name="resetCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions"></a>

```typescript
public resetCreateDatabaseDefaultPermissions(): void
```

##### `resetCreateTableDefaultPermissions` <a name="resetCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions"></a>

```typescript
public resetCreateTableDefaultPermissions(): void
```

##### `resetExternalDataFilteringAllowList` <a name="resetExternalDataFilteringAllowList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetExternalDataFilteringAllowList"></a>

```typescript
public resetExternalDataFilteringAllowList(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetReadOnlyAdmins` <a name="resetReadOnlyAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetReadOnlyAdmins"></a>

```typescript
public resetReadOnlyAdmins(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTrustedResourceOwners` <a name="resetTrustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners"></a>

```typescript
public resetTrustedResourceOwners(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationDataLakeSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationDataLakeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataLakeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput">adminsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFilteringInput">allowExternalDataFilteringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccessInput">allowFullTableExternalDataAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueListInput">authorizedSessionTagValueListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput">createDatabaseDefaultPermissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput">createTableDefaultPermissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowListInput">externalDataFilteringAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdminsInput">readOnlyAdminsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput">trustedResourceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins">admins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFiltering">allowExternalDataFiltering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueList">authorizedSessionTagValueList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowList">externalDataFilteringAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdmins">readOnlyAdmins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: LakeformationDataLakeSettingsCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `adminsInput`<sup>Optional</sup> <a name="adminsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput"></a>

```typescript
public readonly adminsInput: string[];
```

- *Type:* string[]

---

##### `allowExternalDataFilteringInput`<sup>Optional</sup> <a name="allowExternalDataFilteringInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFilteringInput"></a>

```typescript
public readonly allowExternalDataFilteringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="allowFullTableExternalDataAccessInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccessInput"></a>

```typescript
public readonly allowFullTableExternalDataAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedSessionTagValueListInput`<sup>Optional</sup> <a name="authorizedSessionTagValueListInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueListInput"></a>

```typescript
public readonly authorizedSessionTagValueListInput: string[];
```

- *Type:* string[]

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `createDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="createDatabaseDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput"></a>

```typescript
public readonly createDatabaseDefaultPermissionsInput: IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]

---

##### `createTableDefaultPermissionsInput`<sup>Optional</sup> <a name="createTableDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput"></a>

```typescript
public readonly createTableDefaultPermissionsInput: IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]

---

##### `externalDataFilteringAllowListInput`<sup>Optional</sup> <a name="externalDataFilteringAllowListInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowListInput"></a>

```typescript
public readonly externalDataFilteringAllowListInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnlyAdminsInput`<sup>Optional</sup> <a name="readOnlyAdminsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdminsInput"></a>

```typescript
public readonly readOnlyAdminsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `trustedResourceOwnersInput`<sup>Optional</sup> <a name="trustedResourceOwnersInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput"></a>

```typescript
public readonly trustedResourceOwnersInput: string[];
```

- *Type:* string[]

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

---

##### `allowExternalDataFiltering`<sup>Required</sup> <a name="allowExternalDataFiltering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFiltering"></a>

```typescript
public readonly allowExternalDataFiltering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowFullTableExternalDataAccess`<sup>Required</sup> <a name="allowFullTableExternalDataAccess" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccess"></a>

```typescript
public readonly allowFullTableExternalDataAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedSessionTagValueList`<sup>Required</sup> <a name="authorizedSessionTagValueList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueList"></a>

```typescript
public readonly authorizedSessionTagValueList: string[];
```

- *Type:* string[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `externalDataFilteringAllowList`<sup>Required</sup> <a name="externalDataFilteringAllowList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowList"></a>

```typescript
public readonly externalDataFilteringAllowList: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnlyAdmins`<sup>Required</sup> <a name="readOnlyAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdmins"></a>

```typescript
public readonly readOnlyAdmins: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `trustedResourceOwners`<sup>Required</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```typescript
public readonly trustedResourceOwners: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataLakeSettingsConfig <a name="LakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

const lakeformationDataLakeSettingsConfig: lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins">admins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowExternalDataFiltering">allowExternalDataFiltering</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.authorizedSessionTagValueList">authorizedSessionTagValueList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.externalDataFilteringAllowList">externalDataFilteringAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.readOnlyAdmins">readOnlyAdmins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `admins`<sup>Optional</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `allowExternalDataFiltering`<sup>Optional</sup> <a name="allowExternalDataFiltering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowExternalDataFiltering"></a>

```typescript
public readonly allowExternalDataFiltering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}.

---

##### `allowFullTableExternalDataAccess`<sup>Optional</sup> <a name="allowFullTableExternalDataAccess" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowFullTableExternalDataAccess"></a>

```typescript
public readonly allowFullTableExternalDataAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}.

---

##### `authorizedSessionTagValueList`<sup>Optional</sup> <a name="authorizedSessionTagValueList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.authorizedSessionTagValueList"></a>

```typescript
public readonly authorizedSessionTagValueList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `externalDataFilteringAllowList`<sup>Optional</sup> <a name="externalDataFilteringAllowList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.externalDataFilteringAllowList"></a>

```typescript
public readonly externalDataFilteringAllowList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}.

---

##### `readOnlyAdmins`<sup>Optional</sup> <a name="readOnlyAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.readOnlyAdmins"></a>

```typescript
public readonly readOnlyAdmins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#region LakeformationDataLakeSettings#region}

---

##### `trustedResourceOwners`<sup>Optional</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners"></a>

```typescript
public readonly trustedResourceOwners: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

const lakeformationDataLakeSettingsCreateDatabaseDefaultPermissions: lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

### LakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

const lakeformationDataLakeSettingsCreateTableDefaultPermissions: lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

new lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```typescript
public get(index: number): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>[]

---


### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

new lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

new lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>[]

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { lakeformationDataLakeSettings } from '@cdktf/provider-aws'

new lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>

---



