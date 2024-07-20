# `accountPrimaryContact` Submodule <a name="`accountPrimaryContact` Submodule" id="@cdktf/provider-aws.accountPrimaryContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPrimaryContact <a name="AccountPrimaryContact" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact aws_account_primary_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

new accountPrimaryContact.AccountPrimaryContact(scope: Construct, id: string, config: AccountPrimaryContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl">resetWebsiteUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3"></a>

```typescript
public resetAddressLine3(): void
```

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty"></a>

```typescript
public resetDistrictOrCounty(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion"></a>

```typescript
public resetStateOrRegion(): void
```

##### `resetWebsiteUrl` <a name="resetWebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl"></a>

```typescript
public resetWebsiteUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

accountPrimaryContact.AccountPrimaryContact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

accountPrimaryContact.AccountPrimaryContact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

accountPrimaryContact.AccountPrimaryContact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

accountPrimaryContact.AccountPrimaryContact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountPrimaryContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountPrimaryContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountPrimaryContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input">addressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput">websiteUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3">addressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl">websiteUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input"></a>

```typescript
public readonly addressLine3Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput"></a>

```typescript
public readonly districtOrCountyInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput"></a>

```typescript
public readonly stateOrRegionInput: string;
```

- *Type:* string

---

##### `websiteUrlInput`<sup>Optional</sup> <a name="websiteUrlInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput"></a>

```typescript
public readonly websiteUrlInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl"></a>

```typescript
public readonly websiteUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPrimaryContactConfig <a name="AccountPrimaryContactConfig" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.Initializer"></a>

```typescript
import { accountPrimaryContact } from '@cdktf/provider-aws'

const accountPrimaryContactConfig: accountPrimaryContact.AccountPrimaryContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3">addressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName">companyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl">websiteUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `websiteUrl`<sup>Optional</sup> <a name="websiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl"></a>

```typescript
public readonly websiteUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---



