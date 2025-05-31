# `workspaceswebUserSettings` Submodule <a name="`workspaceswebUserSettings` Submodule" id="@cdktf/provider-aws.workspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserSettings <a name="WorkspaceswebUserSettings" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings aws_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettings(scope: Construct, id: string, config: WorkspaceswebUserSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration">putCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration">putToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration">resetCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed">resetDeepLinkAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes">resetDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes">resetIdleDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration">resetToolbarConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCookieSynchronizationConfiguration` <a name="putCookieSynchronizationConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration"></a>

```typescript
public putCookieSynchronizationConfiguration(value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]

---

##### `putToolbarConfiguration` <a name="putToolbarConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration"></a>

```typescript
public putToolbarConfiguration(value: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetCookieSynchronizationConfiguration` <a name="resetCookieSynchronizationConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration"></a>

```typescript
public resetCookieSynchronizationConfiguration(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDeepLinkAllowed` <a name="resetDeepLinkAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed"></a>

```typescript
public resetDeepLinkAllowed(): void
```

##### `resetDisconnectTimeoutInMinutes` <a name="resetDisconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes"></a>

```typescript
public resetDisconnectTimeoutInMinutes(): void
```

##### `resetIdleDisconnectTimeoutInMinutes` <a name="resetIdleDisconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes"></a>

```typescript
public resetIdleDisconnectTimeoutInMinutes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetToolbarConfiguration` <a name="resetToolbarConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration"></a>

```typescript
public resetToolbarConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebUserSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspaceswebUserSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebUserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">cookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration">toolbarConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList">WorkspaceswebUserSettingsToolbarConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn">userSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput">cookieSynchronizationConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput">copyAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput">deepLinkAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput">disconnectTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput">downloadAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput">idleDisconnectTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput">pasteAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput">printAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput">toolbarConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput">uploadAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed">copyAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed">deepLinkAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">disconnectTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed">downloadAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">idleDisconnectTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed">pasteAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed">printAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed">uploadAllowed</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `cookieSynchronizationConfiguration`<sup>Required</sup> <a name="cookieSynchronizationConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```typescript
public readonly cookieSynchronizationConfiguration: WorkspaceswebUserSettingsCookieSynchronizationConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `toolbarConfiguration`<sup>Required</sup> <a name="toolbarConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```typescript
public readonly toolbarConfiguration: WorkspaceswebUserSettingsToolbarConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList">WorkspaceswebUserSettingsToolbarConfigurationList</a>

---

##### `userSettingsArn`<sup>Required</sup> <a name="userSettingsArn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn"></a>

```typescript
public readonly userSettingsArn: string;
```

- *Type:* string

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cookieSynchronizationConfigurationInput`<sup>Optional</sup> <a name="cookieSynchronizationConfigurationInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput"></a>

```typescript
public readonly cookieSynchronizationConfigurationInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]

---

##### `copyAllowedInput`<sup>Optional</sup> <a name="copyAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput"></a>

```typescript
public readonly copyAllowedInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `deepLinkAllowedInput`<sup>Optional</sup> <a name="deepLinkAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput"></a>

```typescript
public readonly deepLinkAllowedInput: string;
```

- *Type:* string

---

##### `disconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="disconnectTimeoutInMinutesInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput"></a>

```typescript
public readonly disconnectTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `downloadAllowedInput`<sup>Optional</sup> <a name="downloadAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput"></a>

```typescript
public readonly downloadAllowedInput: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInMinutesInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `pasteAllowedInput`<sup>Optional</sup> <a name="pasteAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput"></a>

```typescript
public readonly pasteAllowedInput: string;
```

- *Type:* string

---

##### `printAllowedInput`<sup>Optional</sup> <a name="printAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput"></a>

```typescript
public readonly printAllowedInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toolbarConfigurationInput`<sup>Optional</sup> <a name="toolbarConfigurationInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput"></a>

```typescript
public readonly toolbarConfigurationInput: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]

---

##### `uploadAllowedInput`<sup>Optional</sup> <a name="uploadAllowedInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput"></a>

```typescript
public readonly uploadAllowedInput: string;
```

- *Type:* string

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `copyAllowed`<sup>Required</sup> <a name="copyAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed"></a>

```typescript
public readonly copyAllowed: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `deepLinkAllowed`<sup>Required</sup> <a name="deepLinkAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```typescript
public readonly deepLinkAllowed: string;
```

- *Type:* string

---

##### `disconnectTimeoutInMinutes`<sup>Required</sup> <a name="disconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```typescript
public readonly disconnectTimeoutInMinutes: number;
```

- *Type:* number

---

##### `downloadAllowed`<sup>Required</sup> <a name="downloadAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed"></a>

```typescript
public readonly downloadAllowed: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInMinutes`<sup>Required</sup> <a name="idleDisconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutes: number;
```

- *Type:* number

---

##### `pasteAllowed`<sup>Required</sup> <a name="pasteAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed"></a>

```typescript
public readonly pasteAllowed: string;
```

- *Type:* string

---

##### `printAllowed`<sup>Required</sup> <a name="printAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed"></a>

```typescript
public readonly printAllowed: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uploadAllowed`<sup>Required</sup> <a name="uploadAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed"></a>

```typescript
public readonly uploadAllowed: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserSettingsConfig <a name="WorkspaceswebUserSettingsConfig" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

const workspaceswebUserSettingsConfig: workspaceswebUserSettings.WorkspaceswebUserSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed">copyAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed">downloadAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed">pasteAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed">printAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed">uploadAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration">cookieSynchronizationConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]</code> | cookie_synchronization_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed">deepLinkAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes">disconnectTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes">idleDisconnectTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration">toolbarConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]</code> | toolbar_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `copyAllowed`<sup>Required</sup> <a name="copyAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed"></a>

```typescript
public readonly copyAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}.

---

##### `downloadAllowed`<sup>Required</sup> <a name="downloadAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed"></a>

```typescript
public readonly downloadAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}.

---

##### `pasteAllowed`<sup>Required</sup> <a name="pasteAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed"></a>

```typescript
public readonly pasteAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}.

---

##### `printAllowed`<sup>Required</sup> <a name="printAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed"></a>

```typescript
public readonly printAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}.

---

##### `uploadAllowed`<sup>Required</sup> <a name="uploadAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed"></a>

```typescript
public readonly uploadAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}.

---

##### `cookieSynchronizationConfiguration`<sup>Optional</sup> <a name="cookieSynchronizationConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration"></a>

```typescript
public readonly cookieSynchronizationConfiguration: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]

cookie_synchronization_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}.

---

##### `deepLinkAllowed`<sup>Optional</sup> <a name="deepLinkAllowed" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed"></a>

```typescript
public readonly deepLinkAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}.

---

##### `disconnectTimeoutInMinutes`<sup>Optional</sup> <a name="disconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes"></a>

```typescript
public readonly disconnectTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}.

---

##### `idleDisconnectTimeoutInMinutes`<sup>Optional</sup> <a name="idleDisconnectTimeoutInMinutes" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}.

---

##### `toolbarConfiguration`<sup>Optional</sup> <a name="toolbarConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration"></a>

```typescript
public readonly toolbarConfiguration: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]

toolbar_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}

---

### WorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="WorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

const workspaceswebUserSettingsCookieSynchronizationConfiguration: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist">allowlist</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | allowlist block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist">blocklist</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | blocklist block. |

---

##### `allowlist`<sup>Optional</sup> <a name="allowlist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist"></a>

```typescript
public readonly allowlist: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}

---

##### `blocklist`<sup>Optional</sup> <a name="blocklist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist"></a>

```typescript
public readonly blocklist: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

blocklist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

const workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

const workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsToolbarConfiguration <a name="WorkspaceswebUserSettingsToolbarConfiguration" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

const workspaceswebUserSettingsToolbarConfiguration: workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems">hiddenToolbarItems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution">maxDisplayResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType">toolbarType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode">visualMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}. |

---

##### `hiddenToolbarItems`<sup>Optional</sup> <a name="hiddenToolbarItems" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems"></a>

```typescript
public readonly hiddenToolbarItems: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}.

---

##### `maxDisplayResolution`<sup>Optional</sup> <a name="maxDisplayResolution" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution"></a>

```typescript
public readonly maxDisplayResolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}.

---

##### `toolbarType`<sup>Optional</sup> <a name="toolbarType" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType"></a>

```typescript
public readonly toolbarType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}.

---

##### `visualMode`<sup>Optional</sup> <a name="visualMode" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode"></a>

```typescript
public readonly visualMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationList" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>[]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist">putAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist">putBlocklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist">resetAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist">resetBlocklist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowlist` <a name="putAllowlist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist"></a>

```typescript
public putAllowlist(value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---

##### `putBlocklist` <a name="putBlocklist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist"></a>

```typescript
public putBlocklist(value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---

##### `resetAllowlist` <a name="resetAllowlist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist"></a>

```typescript
public resetAllowlist(): void
```

##### `resetBlocklist` <a name="resetBlocklist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist"></a>

```typescript
public resetBlocklist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">allowlist</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput">allowlistInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput">blocklistInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlist`<sup>Required</sup> <a name="allowlist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```typescript
public readonly allowlist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```typescript
public readonly blocklist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `allowlistInput`<sup>Optional</sup> <a name="allowlistInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput"></a>

```typescript
public readonly allowlistInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---

##### `blocklistInput`<sup>Optional</sup> <a name="blocklistInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput"></a>

```typescript
public readonly blocklistInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---


### WorkspaceswebUserSettingsToolbarConfigurationList <a name="WorkspaceswebUserSettingsToolbarConfigurationList" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>[]

---


### WorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="WorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktf/provider-aws'

new workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems">resetHiddenToolbarItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution">resetMaxDisplayResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType">resetToolbarType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode">resetVisualMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHiddenToolbarItems` <a name="resetHiddenToolbarItems" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems"></a>

```typescript
public resetHiddenToolbarItems(): void
```

##### `resetMaxDisplayResolution` <a name="resetMaxDisplayResolution" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution"></a>

```typescript
public resetMaxDisplayResolution(): void
```

##### `resetToolbarType` <a name="resetToolbarType" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType"></a>

```typescript
public resetToolbarType(): void
```

##### `resetVisualMode` <a name="resetVisualMode" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode"></a>

```typescript
public resetVisualMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput">hiddenToolbarItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput">maxDisplayResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput">toolbarTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput">visualModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">hiddenToolbarItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">maxDisplayResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">toolbarType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">visualMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hiddenToolbarItemsInput`<sup>Optional</sup> <a name="hiddenToolbarItemsInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput"></a>

```typescript
public readonly hiddenToolbarItemsInput: string[];
```

- *Type:* string[]

---

##### `maxDisplayResolutionInput`<sup>Optional</sup> <a name="maxDisplayResolutionInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput"></a>

```typescript
public readonly maxDisplayResolutionInput: string;
```

- *Type:* string

---

##### `toolbarTypeInput`<sup>Optional</sup> <a name="toolbarTypeInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput"></a>

```typescript
public readonly toolbarTypeInput: string;
```

- *Type:* string

---

##### `visualModeInput`<sup>Optional</sup> <a name="visualModeInput" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput"></a>

```typescript
public readonly visualModeInput: string;
```

- *Type:* string

---

##### `hiddenToolbarItems`<sup>Required</sup> <a name="hiddenToolbarItems" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```typescript
public readonly hiddenToolbarItems: string[];
```

- *Type:* string[]

---

##### `maxDisplayResolution`<sup>Required</sup> <a name="maxDisplayResolution" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```typescript
public readonly maxDisplayResolution: string;
```

- *Type:* string

---

##### `toolbarType`<sup>Required</sup> <a name="toolbarType" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```typescript
public readonly toolbarType: string;
```

- *Type:* string

---

##### `visualMode`<sup>Required</sup> <a name="visualMode" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```typescript
public readonly visualMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---



