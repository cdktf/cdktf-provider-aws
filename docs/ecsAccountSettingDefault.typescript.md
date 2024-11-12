# `ecsAccountSettingDefault` Submodule <a name="`ecsAccountSettingDefault` Submodule" id="@cdktf/provider-aws.ecsAccountSettingDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsAccountSettingDefault <a name="EcsAccountSettingDefault" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default aws_ecs_account_setting_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

new ecsAccountSettingDefault.EcsAccountSettingDefault(scope: Construct, id: string, config: EcsAccountSettingDefaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig">EcsAccountSettingDefaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig">EcsAccountSettingDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsAccountSettingDefault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isConstruct"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

ecsAccountSettingDefault.EcsAccountSettingDefault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformElement"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformResource"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcsAccountSettingDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsAccountSettingDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsAccountSettingDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsAccountSettingDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsAccountSettingDefaultConfig <a name="EcsAccountSettingDefaultConfig" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.Initializer"></a>

```typescript
import { ecsAccountSettingDefault } from '@cdktf/provider-aws'

const ecsAccountSettingDefaultConfig: ecsAccountSettingDefault.EcsAccountSettingDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#name EcsAccountSettingDefault#name}. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#value EcsAccountSettingDefault#value}. |
| <code><a href="#@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#id EcsAccountSettingDefault#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#name EcsAccountSettingDefault#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#value EcsAccountSettingDefault#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsAccountSettingDefault.EcsAccountSettingDefaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/ecs_account_setting_default#id EcsAccountSettingDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



