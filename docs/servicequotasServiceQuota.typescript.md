# `servicequotasServiceQuota` Submodule <a name="`servicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.servicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasServiceQuota <a name="ServicequotasServiceQuota" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

new servicequotasServiceQuota.ServicequotasServiceQuota(scope: Construct, id: string, config: ServicequotasServiceQuotaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig">ServicequotasServiceQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig">ServicequotasServiceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicequotasServiceQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicequotasServiceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicequotasServiceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable">adjustable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue">defaultValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName">quotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus">requestStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric">usageMetric</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput">quotaCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput">serviceCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode">quotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode">serviceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adjustable`<sup>Required</sup> <a name="adjustable" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable"></a>

```typescript
public readonly adjustable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue"></a>

```typescript
public readonly defaultValue: number;
```

- *Type:* number

---

##### `quotaName`<sup>Required</sup> <a name="quotaName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName"></a>

```typescript
public readonly quotaName: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `requestStatus`<sup>Required</sup> <a name="requestStatus" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus"></a>

```typescript
public readonly requestStatus: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `usageMetric`<sup>Required</sup> <a name="usageMetric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric"></a>

```typescript
public readonly usageMetric: ServicequotasServiceQuotaUsageMetricList;
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `quotaCodeInput`<sup>Optional</sup> <a name="quotaCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput"></a>

```typescript
public readonly quotaCodeInput: string;
```

- *Type:* string

---

##### `serviceCodeInput`<sup>Optional</sup> <a name="serviceCodeInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput"></a>

```typescript
public readonly serviceCodeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasServiceQuotaConfig <a name="ServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

const servicequotasServiceQuotaConfig: servicequotasServiceQuota.ServicequotasServiceQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode">quotaCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode">serviceCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServicequotasServiceQuotaUsageMetric <a name="ServicequotasServiceQuotaUsageMetric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

const servicequotasServiceQuotaUsageMetric: servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric = { ... }
```


### ServicequotasServiceQuotaUsageMetricMetricDimensions <a name="ServicequotasServiceQuotaUsageMetricMetricDimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

const servicequotasServiceQuotaUsageMetricMetricDimensions: servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ServicequotasServiceQuotaUsageMetricList <a name="ServicequotasServiceQuotaUsageMetricList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

new servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get"></a>

```typescript
public get(index: number): ServicequotasServiceQuotaUsageMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsList <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

new servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get"></a>

```typescript
public get(index: number): ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

new servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class">class</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `class`<sup>Required</sup> <a name="class" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class"></a>

```typescript
public readonly class: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicequotasServiceQuotaUsageMetricMetricDimensions;
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a>

---


### ServicequotasServiceQuotaUsageMetricOutputReference <a name="ServicequotasServiceQuotaUsageMetricOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer"></a>

```typescript
import { servicequotasServiceQuota } from '@cdktf/provider-aws'

new servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions">metricDimensions</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation">metricStatisticRecommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDimensions`<sup>Required</sup> <a name="metricDimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions"></a>

```typescript
public readonly metricDimensions: ServicequotasServiceQuotaUsageMetricMetricDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `metricStatisticRecommendation`<sup>Required</sup> <a name="metricStatisticRecommendation" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation"></a>

```typescript
public readonly metricStatisticRecommendation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicequotasServiceQuotaUsageMetric;
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a>

---



