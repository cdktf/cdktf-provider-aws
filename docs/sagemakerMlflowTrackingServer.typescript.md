# `sagemakerMlflowTrackingServer` Submodule <a name="`sagemakerMlflowTrackingServer` Submodule" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowTrackingServer <a name="SagemakerMlflowTrackingServer" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server aws_sagemaker_mlflow_tracking_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

new sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer(scope: Construct, id: string, config: SagemakerMlflowTrackingServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration">resetAutomaticModelRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion">resetMlflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize">resetTrackingServerSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart">resetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutomaticModelRegistration` <a name="resetAutomaticModelRegistration" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration"></a>

```typescript
public resetAutomaticModelRegistration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMlflowVersion` <a name="resetMlflowVersion" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion"></a>

```typescript
public resetMlflowVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTrackingServerSize` <a name="resetTrackingServerSize" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize"></a>

```typescript
public resetTrackingServerSize(): void
```

##### `resetWeeklyMaintenanceWindowStart` <a name="resetWeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart"></a>

```typescript
public resetWeeklyMaintenanceWindowStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerMlflowTrackingServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerMlflowTrackingServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerMlflowTrackingServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerMlflowTrackingServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerUrl">trackingServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput">artifactStoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput">automaticModelRegistrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput">mlflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput">trackingServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput">trackingServerSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput">weeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri">artifactStoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration">automaticModelRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion">mlflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName">trackingServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize">trackingServerSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `trackingServerUrl`<sup>Required</sup> <a name="trackingServerUrl" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerUrl"></a>

```typescript
public readonly trackingServerUrl: string;
```

- *Type:* string

---

##### `artifactStoreUriInput`<sup>Optional</sup> <a name="artifactStoreUriInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput"></a>

```typescript
public readonly artifactStoreUriInput: string;
```

- *Type:* string

---

##### `automaticModelRegistrationInput`<sup>Optional</sup> <a name="automaticModelRegistrationInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput"></a>

```typescript
public readonly automaticModelRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mlflowVersionInput`<sup>Optional</sup> <a name="mlflowVersionInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput"></a>

```typescript
public readonly mlflowVersionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trackingServerNameInput`<sup>Optional</sup> <a name="trackingServerNameInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput"></a>

```typescript
public readonly trackingServerNameInput: string;
```

- *Type:* string

---

##### `trackingServerSizeInput`<sup>Optional</sup> <a name="trackingServerSizeInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput"></a>

```typescript
public readonly trackingServerSizeInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStartInput" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput"></a>

```typescript
public readonly weeklyMaintenanceWindowStartInput: string;
```

- *Type:* string

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri"></a>

```typescript
public readonly artifactStoreUri: string;
```

- *Type:* string

---

##### `automaticModelRegistration`<sup>Required</sup> <a name="automaticModelRegistration" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration"></a>

```typescript
public readonly automaticModelRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mlflowVersion`<sup>Required</sup> <a name="mlflowVersion" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion"></a>

```typescript
public readonly mlflowVersion: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trackingServerName`<sup>Required</sup> <a name="trackingServerName" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName"></a>

```typescript
public readonly trackingServerName: string;
```

- *Type:* string

---

##### `trackingServerSize`<sup>Required</sup> <a name="trackingServerSize" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize"></a>

```typescript
public readonly trackingServerSize: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowTrackingServerConfig <a name="SagemakerMlflowTrackingServerConfig" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktf/provider-aws'

const sagemakerMlflowTrackingServerConfig: sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri">artifactStoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName">trackingServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration">automaticModelRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#id SagemakerMlflowTrackingServer#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion">mlflowVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tags_all SagemakerMlflowTrackingServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize">trackingServerSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri"></a>

```typescript
public readonly artifactStoreUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}.

---

##### `trackingServerName`<sup>Required</sup> <a name="trackingServerName" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName"></a>

```typescript
public readonly trackingServerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}.

---

##### `automaticModelRegistration`<sup>Optional</sup> <a name="automaticModelRegistration" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration"></a>

```typescript
public readonly automaticModelRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#id SagemakerMlflowTrackingServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mlflowVersion`<sup>Optional</sup> <a name="mlflowVersion" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion"></a>

```typescript
public readonly mlflowVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tags_all SagemakerMlflowTrackingServer#tags_all}.

---

##### `trackingServerSize`<sup>Optional</sup> <a name="trackingServerSize" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize"></a>

```typescript
public readonly trackingServerSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktf/provider-aws.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}.

---



