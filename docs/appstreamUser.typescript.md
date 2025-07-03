# `appstreamUser` Submodule <a name="`appstreamUser` Submodule" id="@cdktf/provider-aws.appstreamUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamUser <a name="AppstreamUser" id="@cdktf/provider-aws.appstreamUser.AppstreamUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user aws_appstream_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

new appstreamUser.AppstreamUser(scope: Construct, id: string, config: AppstreamUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig">AppstreamUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig">AppstreamUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.resetSendEmailNotification">resetSendEmailNotification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSendEmailNotification` <a name="resetSendEmailNotification" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.resetSendEmailNotification"></a>

```typescript
public resetSendEmailNotification(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppstreamUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isConstruct"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

appstreamUser.AppstreamUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformElement"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

appstreamUser.AppstreamUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformResource"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

appstreamUser.AppstreamUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

appstreamUser.AppstreamUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppstreamUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppstreamUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.sendEmailNotificationInput">sendEmailNotificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.sendEmailNotification">sendEmailNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sendEmailNotificationInput`<sup>Optional</sup> <a name="sendEmailNotificationInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.sendEmailNotificationInput"></a>

```typescript
public readonly sendEmailNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sendEmailNotification`<sup>Required</sup> <a name="sendEmailNotification" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.sendEmailNotification"></a>

```typescript
public readonly sendEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamUser.AppstreamUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamUserConfig <a name="AppstreamUserConfig" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.Initializer"></a>

```typescript
import { appstreamUser } from '@cdktf/provider-aws'

const appstreamUserConfig: appstreamUser.AppstreamUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#authentication_type AppstreamUser#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#user_name AppstreamUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#enabled AppstreamUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#first_name AppstreamUser#first_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#id AppstreamUser#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#last_name AppstreamUser#last_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.sendEmailNotification">sendEmailNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#send_email_notification AppstreamUser#send_email_notification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#authentication_type AppstreamUser#authentication_type}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#user_name AppstreamUser#user_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#enabled AppstreamUser#enabled}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#first_name AppstreamUser#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#id AppstreamUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#last_name AppstreamUser#last_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#region AppstreamUser#region}

---

##### `sendEmailNotification`<sup>Optional</sup> <a name="sendEmailNotification" id="@cdktf/provider-aws.appstreamUser.AppstreamUserConfig.property.sendEmailNotification"></a>

```typescript
public readonly sendEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/appstream_user#send_email_notification AppstreamUser#send_email_notification}.

---



