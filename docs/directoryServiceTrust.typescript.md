# `directoryServiceTrust` Submodule <a name="`directoryServiceTrust` Submodule" id="@cdktf/provider-aws.directoryServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceTrust <a name="DirectoryServiceTrust" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust aws_directory_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

new directoryServiceTrust.DirectoryServiceTrust(scope: Construct, id: string, config: DirectoryServiceTrustConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs">resetConditionalForwarderIpAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder">resetDeleteAssociatedConditionalForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth">resetSelectiveAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType">resetTrustType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConditionalForwarderIpAddrs` <a name="resetConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs"></a>

```typescript
public resetConditionalForwarderIpAddrs(): void
```

##### `resetDeleteAssociatedConditionalForwarder` <a name="resetDeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder"></a>

```typescript
public resetDeleteAssociatedConditionalForwarder(): void
```

##### `resetSelectiveAuth` <a name="resetSelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth"></a>

```typescript
public resetSelectiveAuth(): void
```

##### `resetTrustType` <a name="resetTrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType"></a>

```typescript
public resetTrustType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

directoryServiceTrust.DirectoryServiceTrust.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

directoryServiceTrust.DirectoryServiceTrust.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

directoryServiceTrust.DirectoryServiceTrust.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryServiceTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DirectoryServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime">createdDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime">stateLastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState">trustState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason">trustStateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput">conditionalForwarderIpAddrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput">deleteAssociatedConditionalForwarderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput">remoteDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput">selectiveAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput">trustDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput">trustPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput">trustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs">conditionalForwarderIpAddrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder">deleteAssociatedConditionalForwarder</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName">remoteDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth">selectiveAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection">trustDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword">trustPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType">trustType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdDateTime`<sup>Required</sup> <a name="createdDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime"></a>

```typescript
public readonly createdDateTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime"></a>

```typescript
public readonly lastUpdatedDateTime: string;
```

- *Type:* string

---

##### `stateLastUpdatedDateTime`<sup>Required</sup> <a name="stateLastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime"></a>

```typescript
public readonly stateLastUpdatedDateTime: string;
```

- *Type:* string

---

##### `trustState`<sup>Required</sup> <a name="trustState" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState"></a>

```typescript
public readonly trustState: string;
```

- *Type:* string

---

##### `trustStateReason`<sup>Required</sup> <a name="trustStateReason" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason"></a>

```typescript
public readonly trustStateReason: string;
```

- *Type:* string

---

##### `conditionalForwarderIpAddrsInput`<sup>Optional</sup> <a name="conditionalForwarderIpAddrsInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput"></a>

```typescript
public readonly conditionalForwarderIpAddrsInput: string[];
```

- *Type:* string[]

---

##### `deleteAssociatedConditionalForwarderInput`<sup>Optional</sup> <a name="deleteAssociatedConditionalForwarderInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput"></a>

```typescript
public readonly deleteAssociatedConditionalForwarderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `remoteDomainNameInput`<sup>Optional</sup> <a name="remoteDomainNameInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput"></a>

```typescript
public readonly remoteDomainNameInput: string;
```

- *Type:* string

---

##### `selectiveAuthInput`<sup>Optional</sup> <a name="selectiveAuthInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput"></a>

```typescript
public readonly selectiveAuthInput: string;
```

- *Type:* string

---

##### `trustDirectionInput`<sup>Optional</sup> <a name="trustDirectionInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput"></a>

```typescript
public readonly trustDirectionInput: string;
```

- *Type:* string

---

##### `trustPasswordInput`<sup>Optional</sup> <a name="trustPasswordInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput"></a>

```typescript
public readonly trustPasswordInput: string;
```

- *Type:* string

---

##### `trustTypeInput`<sup>Optional</sup> <a name="trustTypeInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput"></a>

```typescript
public readonly trustTypeInput: string;
```

- *Type:* string

---

##### `conditionalForwarderIpAddrs`<sup>Required</sup> <a name="conditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs"></a>

```typescript
public readonly conditionalForwarderIpAddrs: string[];
```

- *Type:* string[]

---

##### `deleteAssociatedConditionalForwarder`<sup>Required</sup> <a name="deleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder"></a>

```typescript
public readonly deleteAssociatedConditionalForwarder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `remoteDomainName`<sup>Required</sup> <a name="remoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName"></a>

```typescript
public readonly remoteDomainName: string;
```

- *Type:* string

---

##### `selectiveAuth`<sup>Required</sup> <a name="selectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth"></a>

```typescript
public readonly selectiveAuth: string;
```

- *Type:* string

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection"></a>

```typescript
public readonly trustDirection: string;
```

- *Type:* string

---

##### `trustPassword`<sup>Required</sup> <a name="trustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword"></a>

```typescript
public readonly trustPassword: string;
```

- *Type:* string

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType"></a>

```typescript
public readonly trustType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceTrustConfig <a name="DirectoryServiceTrustConfig" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.Initializer"></a>

```typescript
import { directoryServiceTrust } from '@cdktf/provider-aws'

const directoryServiceTrustConfig: directoryServiceTrust.DirectoryServiceTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName">remoteDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection">trustDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword">trustPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs">conditionalForwarderIpAddrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder">deleteAssociatedConditionalForwarder</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth">selectiveAuth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType">trustType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}.

---

##### `remoteDomainName`<sup>Required</sup> <a name="remoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName"></a>

```typescript
public readonly remoteDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}.

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection"></a>

```typescript
public readonly trustDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}.

---

##### `trustPassword`<sup>Required</sup> <a name="trustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword"></a>

```typescript
public readonly trustPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}.

---

##### `conditionalForwarderIpAddrs`<sup>Optional</sup> <a name="conditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs"></a>

```typescript
public readonly conditionalForwarderIpAddrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}.

---

##### `deleteAssociatedConditionalForwarder`<sup>Optional</sup> <a name="deleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder"></a>

```typescript
public readonly deleteAssociatedConditionalForwarder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}.

---

##### `selectiveAuth`<sup>Optional</sup> <a name="selectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth"></a>

```typescript
public readonly selectiveAuth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}.

---

##### `trustType`<sup>Optional</sup> <a name="trustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType"></a>

```typescript
public readonly trustType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}.

---



