# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktf/provider-aws.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktf/provider-aws.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector aws_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

new transferConnector.TransferConnector(scope: Construct, id: string, config: TransferConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config">putAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig">putSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config">resetAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig">resetSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAs2Config` <a name="putAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config"></a>

```typescript
public putAs2Config(value: TransferConnectorAs2Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `putSftpConfig` <a name="putSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig"></a>

```typescript
public putSftpConfig(value: TransferConnectorSftpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `resetAs2Config` <a name="resetAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config"></a>

```typescript
public resetAs2Config(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole"></a>

```typescript
public resetLoggingRole(): void
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```typescript
public resetSecurityPolicyName(): void
```

##### `resetSftpConfig` <a name="resetSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig"></a>

```typescript
public resetSftpConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

transferConnector.TransferConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

transferConnector.TransferConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

transferConnector.TransferConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

transferConnector.TransferConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config">as2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput">accessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput">as2ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput">loggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput">sftpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole">accessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole">loggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `as2Config`<sup>Required</sup> <a name="as2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config"></a>

```typescript
public readonly as2Config: TransferConnectorAs2ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `sftpConfig`<sup>Required</sup> <a name="sftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig"></a>

```typescript
public readonly sftpConfig: TransferConnectorSftpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: string;
```

- *Type:* string

---

##### `as2ConfigInput`<sup>Optional</sup> <a name="as2ConfigInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```typescript
public readonly as2ConfigInput: TransferConnectorAs2Config;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```typescript
public readonly loggingRoleInput: string;
```

- *Type:* string

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```typescript
public readonly securityPolicyNameInput: string;
```

- *Type:* string

---

##### `sftpConfigInput`<sup>Optional</sup> <a name="sftpConfigInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```typescript
public readonly sftpConfigInput: TransferConnectorSftpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

const transferConnectorAs2Config: transferConnector.TransferConnectorAs2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#compression TransferConnector#compression}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId">localProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdnResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject">messageSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}. |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#compression TransferConnector#compression}.

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}.

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}.

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```typescript
public readonly mdnResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}.

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}.

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}.

---

##### `mdnSigningAlgorithm`<sup>Optional</sup> <a name="mdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```typescript
public readonly mdnSigningAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}.

---

##### `messageSubject`<sup>Optional</sup> <a name="messageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```typescript
public readonly messageSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}.

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

const transferConnectorConfig: transferConnector.TransferConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole">accessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config">as2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole">loggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | sftp_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```typescript
public readonly as2Config: TransferConnectorAs2Config;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}.

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```typescript
public readonly sftpConfig: TransferConnectorSftpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

sftp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

const transferConnectorSftpConfig: transferConnector.TransferConnectorSftpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trustedHostKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId">userSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}. |

---

##### `trustedHostKeys`<sup>Optional</sup> <a name="trustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```typescript
public readonly trustedHostKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}.

---

##### `userSecretId`<sup>Optional</sup> <a name="userSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```typescript
public readonly userSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

new transferConnector.TransferConnectorAs2ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">resetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">resetMessageSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMdnSigningAlgorithm` <a name="resetMdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```typescript
public resetMdnSigningAlgorithm(): void
```

##### `resetMessageSubject` <a name="resetMessageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```typescript
public resetMessageSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">localProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdnResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdnSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">messageSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">localProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdnResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">messageSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```typescript
public readonly localProfileIdInput: string;
```

- *Type:* string

---

##### `mdnResponseInput`<sup>Optional</sup> <a name="mdnResponseInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```typescript
public readonly mdnResponseInput: string;
```

- *Type:* string

---

##### `mdnSigningAlgorithmInput`<sup>Optional</sup> <a name="mdnSigningAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```typescript
public readonly mdnSigningAlgorithmInput: string;
```

- *Type:* string

---

##### `messageSubjectInput`<sup>Optional</sup> <a name="messageSubjectInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```typescript
public readonly messageSubjectInput: string;
```

- *Type:* string

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```typescript
public readonly partnerProfileIdInput: string;
```

- *Type:* string

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```typescript
public readonly mdnResponse: string;
```

- *Type:* string

---

##### `mdnSigningAlgorithm`<sup>Required</sup> <a name="mdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```typescript
public readonly mdnSigningAlgorithm: string;
```

- *Type:* string

---

##### `messageSubject`<sup>Required</sup> <a name="messageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```typescript
public readonly messageSubject: string;
```

- *Type:* string

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferConnectorAs2Config;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktf/provider-aws'

new transferConnector.TransferConnectorSftpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">resetTrustedHostKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">resetUserSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedHostKeys` <a name="resetTrustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```typescript
public resetTrustedHostKeys(): void
```

##### `resetUserSecretId` <a name="resetUserSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```typescript
public resetUserSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trustedHostKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">userSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trustedHostKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">userSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustedHostKeysInput`<sup>Optional</sup> <a name="trustedHostKeysInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```typescript
public readonly trustedHostKeysInput: string[];
```

- *Type:* string[]

---

##### `userSecretIdInput`<sup>Optional</sup> <a name="userSecretIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```typescript
public readonly userSecretIdInput: string;
```

- *Type:* string

---

##### `trustedHostKeys`<sup>Required</sup> <a name="trustedHostKeys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```typescript
public readonly trustedHostKeys: string[];
```

- *Type:* string[]

---

##### `userSecretId`<sup>Required</sup> <a name="userSecretId" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```typescript
public readonly userSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferConnectorSftpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---



