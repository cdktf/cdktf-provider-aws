# `ssoadminApplicationAccessScope` Submodule <a name="`ssoadminApplicationAccessScope` Submodule" id="@cdktf/provider-aws.ssoadminApplicationAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminApplicationAccessScope <a name="SsoadminApplicationAccessScope" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope aws_ssoadmin_application_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

new ssoadminApplicationAccessScope.SsoadminApplicationAccessScope(scope: Construct, id: string, config: SsoadminApplicationAccessScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig">SsoadminApplicationAccessScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig">SsoadminApplicationAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.resetAuthorizedTargets">resetAuthorizedTargets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthorizedTargets` <a name="resetAuthorizedTargets" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.resetAuthorizedTargets"></a>

```typescript
public resetAuthorizedTargets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminApplicationAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isConstruct"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformElement"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformResource"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsoadminApplicationAccessScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminApplicationAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminApplicationAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminApplicationAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.authorizedTargetsInput">authorizedTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.authorizedTargets">authorizedTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `authorizedTargetsInput`<sup>Optional</sup> <a name="authorizedTargetsInput" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.authorizedTargetsInput"></a>

```typescript
public readonly authorizedTargetsInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `authorizedTargets`<sup>Required</sup> <a name="authorizedTargets" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.authorizedTargets"></a>

```typescript
public readonly authorizedTargets: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminApplicationAccessScopeConfig <a name="SsoadminApplicationAccessScopeConfig" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.Initializer"></a>

```typescript
import { ssoadminApplicationAccessScope } from '@cdktf/provider-aws'

const ssoadminApplicationAccessScopeConfig: ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#application_arn SsoadminApplicationAccessScope#application_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#scope SsoadminApplicationAccessScope#scope}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.authorizedTargets">authorizedTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#authorized_targets SsoadminApplicationAccessScope#authorized_targets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#application_arn SsoadminApplicationAccessScope#application_arn}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#scope SsoadminApplicationAccessScope#scope}.

---

##### `authorizedTargets`<sup>Optional</sup> <a name="authorizedTargets" id="@cdktf/provider-aws.ssoadminApplicationAccessScope.SsoadminApplicationAccessScopeConfig.property.authorizedTargets"></a>

```typescript
public readonly authorizedTargets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/ssoadmin_application_access_scope#authorized_targets SsoadminApplicationAccessScope#authorized_targets}.

---



