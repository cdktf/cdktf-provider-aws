# `cloudformationStackInstances` Submodule <a name="`cloudformationStackInstances` Submodule" id="@cdktf/provider-aws.cloudformationStackInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackInstances <a name="CloudformationStackInstances" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstances(scope: Construct, id: string, config: CloudformationStackInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig">CloudformationStackInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig">CloudformationStackInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets">putDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences">putOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetCallAs">resetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetDeploymentTargets">resetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOperationPreferences">resetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRetainStacks">resetRetainStacks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentTargets` <a name="putDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets"></a>

```typescript
public putDeploymentTargets(value: CloudformationStackInstancesDeploymentTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---

##### `putOperationPreferences` <a name="putOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences"></a>

```typescript
public putOperationPreferences(value: CloudformationStackInstancesOperationPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudformationStackInstancesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

---

##### `resetAccounts` <a name="resetAccounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetCallAs` <a name="resetCallAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetCallAs"></a>

```typescript
public resetCallAs(): void
```

##### `resetDeploymentTargets` <a name="resetDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetDeploymentTargets"></a>

```typescript
public resetDeploymentTargets(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationPreferences` <a name="resetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOperationPreferences"></a>

```typescript
public resetOperationPreferences(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRetainStacks` <a name="resetRetainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRetainStacks"></a>

```typescript
public resetRetainStacks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

cloudformationStackInstances.CloudformationStackInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

cloudformationStackInstances.CloudformationStackInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

cloudformationStackInstances.CloudformationStackInstances.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationStackInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationStackInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudformationStackInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference">CloudformationStackInstancesDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference">CloudformationStackInstancesOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackInstanceSummaries">stackInstanceSummaries</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList">CloudformationStackInstancesStackInstanceSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetId">stackSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference">CloudformationStackInstancesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAsInput">callAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargetsInput">deploymentTargetsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferencesInput">operationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacksInput">retainStacksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetNameInput">stackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAs">callAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverrides">parameterOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacks">retainStacks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentTargets`<sup>Required</sup> <a name="deploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargets"></a>

```typescript
public readonly deploymentTargets: CloudformationStackInstancesDeploymentTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference">CloudformationStackInstancesDeploymentTargetsOutputReference</a>

---

##### `operationPreferences`<sup>Required</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferences"></a>

```typescript
public readonly operationPreferences: CloudformationStackInstancesOperationPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference">CloudformationStackInstancesOperationPreferencesOutputReference</a>

---

##### `stackInstanceSummaries`<sup>Required</sup> <a name="stackInstanceSummaries" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackInstanceSummaries"></a>

```typescript
public readonly stackInstanceSummaries: CloudformationStackInstancesStackInstanceSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList">CloudformationStackInstancesStackInstanceSummariesList</a>

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetId"></a>

```typescript
public readonly stackSetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackInstancesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference">CloudformationStackInstancesTimeoutsOutputReference</a>

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `callAsInput`<sup>Optional</sup> <a name="callAsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAsInput"></a>

```typescript
public readonly callAsInput: string;
```

- *Type:* string

---

##### `deploymentTargetsInput`<sup>Optional</sup> <a name="deploymentTargetsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargetsInput"></a>

```typescript
public readonly deploymentTargetsInput: CloudformationStackInstancesDeploymentTargets;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationPreferencesInput`<sup>Optional</sup> <a name="operationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferencesInput"></a>

```typescript
public readonly operationPreferencesInput: CloudformationStackInstancesOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `retainStacksInput`<sup>Optional</sup> <a name="retainStacksInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacksInput"></a>

```typescript
public readonly retainStacksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetNameInput"></a>

```typescript
public readonly stackSetNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudformationStackInstancesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `callAs`<sup>Required</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAs"></a>

```typescript
public readonly callAs: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `retainStacks`<sup>Required</sup> <a name="retainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacks"></a>

```typescript
public readonly retainStacks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackInstancesConfig <a name="CloudformationStackInstancesConfig" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

const cloudformationStackInstancesConfig: cloudformationStackInstances.CloudformationStackInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.stackSetName">stackSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.callAs">callAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | deployment_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.parameterOverrides">parameterOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.retainStacks">retainStacks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}.

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.callAs"></a>

```typescript
public readonly callAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}.

---

##### `deploymentTargets`<sup>Optional</sup> <a name="deploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.deploymentTargets"></a>

```typescript
public readonly deploymentTargets: CloudformationStackInstancesDeploymentTargets;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

deployment_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#deployment_targets CloudformationStackInstances#deployment_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.operationPreferences"></a>

```typescript
public readonly operationPreferences: CloudformationStackInstancesOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#operation_preferences CloudformationStackInstances#operation_preferences}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}.

---

##### `retainStacks`<sup>Optional</sup> <a name="retainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.retainStacks"></a>

```typescript
public readonly retainStacks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackInstancesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#timeouts CloudformationStackInstances#timeouts}

---

### CloudformationStackInstancesDeploymentTargets <a name="CloudformationStackInstancesDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

const cloudformationStackInstancesDeploymentTargets: cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountFilterType">accountFilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountsUrl">accountsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}. |

---

##### `accountFilterType`<sup>Optional</sup> <a name="accountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountFilterType"></a>

```typescript
public readonly accountFilterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}.

---

##### `accountsUrl`<sup>Optional</sup> <a name="accountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountsUrl"></a>

```typescript
public readonly accountsUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}.

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}.

---

### CloudformationStackInstancesOperationPreferences <a name="CloudformationStackInstancesOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

const cloudformationStackInstancesOperationPreferences: cloudformationStackInstances.CloudformationStackInstancesOperationPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.concurrencyMode">concurrencyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionOrder">regionOrder</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}. |

---

##### `concurrencyMode`<sup>Optional</sup> <a name="concurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.concurrencyMode"></a>

```typescript
public readonly concurrencyMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}.

---

##### `failureToleranceCount`<sup>Optional</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}.

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}.

---

##### `maxConcurrentCount`<sup>Optional</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentCount"></a>

```typescript
public readonly maxConcurrentCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}.

---

##### `maxConcurrentPercentage`<sup>Optional</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentPercentage"></a>

```typescript
public readonly maxConcurrentPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}.

---

##### `regionConcurrencyType`<sup>Optional</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionConcurrencyType"></a>

```typescript
public readonly regionConcurrencyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}.

---

##### `regionOrder`<sup>Optional</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionOrder"></a>

```typescript
public readonly regionOrder: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}.

---

### CloudformationStackInstancesStackInstanceSummaries <a name="CloudformationStackInstancesStackInstanceSummaries" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

const cloudformationStackInstancesStackInstanceSummaries: cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries = { ... }
```


### CloudformationStackInstancesTimeouts <a name="CloudformationStackInstancesTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

const cloudformationStackInstancesTimeouts: cloudformationStackInstances.CloudformationStackInstancesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackInstancesDeploymentTargetsOutputReference <a name="CloudformationStackInstancesDeploymentTargetsOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountFilterType">resetAccountFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountsUrl">resetAccountsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountFilterType` <a name="resetAccountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountFilterType"></a>

```typescript
public resetAccountFilterType(): void
```

##### `resetAccounts` <a name="resetAccounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetAccountsUrl` <a name="resetAccountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountsUrl"></a>

```typescript
public resetAccountsUrl(): void
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```typescript
public resetOrganizationalUnitIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterTypeInput">accountFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrlInput">accountsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterType">accountFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrl">accountsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountFilterTypeInput`<sup>Optional</sup> <a name="accountFilterTypeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterTypeInput"></a>

```typescript
public readonly accountFilterTypeInput: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `accountsUrlInput`<sup>Optional</sup> <a name="accountsUrlInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrlInput"></a>

```typescript
public readonly accountsUrlInput: string;
```

- *Type:* string

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```typescript
public readonly organizationalUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `accountFilterType`<sup>Required</sup> <a name="accountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterType"></a>

```typescript
public readonly accountFilterType: string;
```

- *Type:* string

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `accountsUrl`<sup>Required</sup> <a name="accountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrl"></a>

```typescript
public readonly accountsUrl: string;
```

- *Type:* string

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackInstancesDeploymentTargets;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---


### CloudformationStackInstancesOperationPreferencesOutputReference <a name="CloudformationStackInstancesOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetConcurrencyMode">resetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureToleranceCount">resetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureTolerancePercentage">resetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentCount">resetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentPercentage">resetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionConcurrencyType">resetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionOrder">resetRegionOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrencyMode` <a name="resetConcurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetConcurrencyMode"></a>

```typescript
public resetConcurrencyMode(): void
```

##### `resetFailureToleranceCount` <a name="resetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```typescript
public resetFailureToleranceCount(): void
```

##### `resetFailureTolerancePercentage` <a name="resetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```typescript
public resetFailureTolerancePercentage(): void
```

##### `resetMaxConcurrentCount` <a name="resetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```typescript
public resetMaxConcurrentCount(): void
```

##### `resetMaxConcurrentPercentage` <a name="resetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```typescript
public resetMaxConcurrentPercentage(): void
```

##### `resetRegionConcurrencyType` <a name="resetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```typescript
public resetRegionConcurrencyType(): void
```

##### `resetRegionOrder` <a name="resetRegionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionOrder"></a>

```typescript
public resetRegionOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyModeInput">concurrencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCountInput">failureToleranceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failureTolerancePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCountInput">maxConcurrentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">maxConcurrentPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">regionConcurrencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrderInput">regionOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyMode">concurrencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrder">regionOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrencyModeInput`<sup>Optional</sup> <a name="concurrencyModeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyModeInput"></a>

```typescript
public readonly concurrencyModeInput: string;
```

- *Type:* string

---

##### `failureToleranceCountInput`<sup>Optional</sup> <a name="failureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```typescript
public readonly failureToleranceCountInput: number;
```

- *Type:* number

---

##### `failureTolerancePercentageInput`<sup>Optional</sup> <a name="failureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```typescript
public readonly failureTolerancePercentageInput: number;
```

- *Type:* number

---

##### `maxConcurrentCountInput`<sup>Optional</sup> <a name="maxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```typescript
public readonly maxConcurrentCountInput: number;
```

- *Type:* number

---

##### `maxConcurrentPercentageInput`<sup>Optional</sup> <a name="maxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```typescript
public readonly maxConcurrentPercentageInput: number;
```

- *Type:* number

---

##### `regionConcurrencyTypeInput`<sup>Optional</sup> <a name="regionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```typescript
public readonly regionConcurrencyTypeInput: string;
```

- *Type:* string

---

##### `regionOrderInput`<sup>Optional</sup> <a name="regionOrderInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrderInput"></a>

```typescript
public readonly regionOrderInput: string[];
```

- *Type:* string[]

---

##### `concurrencyMode`<sup>Required</sup> <a name="concurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyMode"></a>

```typescript
public readonly concurrencyMode: string;
```

- *Type:* string

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```typescript
public readonly maxConcurrentCount: number;
```

- *Type:* number

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```typescript
public readonly maxConcurrentPercentage: number;
```

- *Type:* number

---

##### `regionConcurrencyType`<sup>Required</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```typescript
public readonly regionConcurrencyType: string;
```

- *Type:* string

---

##### `regionOrder`<sup>Required</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrder"></a>

```typescript
public readonly regionOrder: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackInstancesOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---


### CloudformationStackInstancesStackInstanceSummariesList <a name="CloudformationStackInstancesStackInstanceSummariesList" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get"></a>

```typescript
public get(index: number): CloudformationStackInstancesStackInstanceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudformationStackInstancesStackInstanceSummariesOutputReference <a name="CloudformationStackInstancesStackInstanceSummariesOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.detailedStatus">detailedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.driftStatus">driftStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.organizationalUnitId">organizationalUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackSetId">stackSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries">CloudformationStackInstancesStackInstanceSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.detailedStatus"></a>

```typescript
public readonly detailedStatus: string;
```

- *Type:* string

---

##### `driftStatus`<sup>Required</sup> <a name="driftStatus" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.driftStatus"></a>

```typescript
public readonly driftStatus: string;
```

- *Type:* string

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.organizationalUnitId"></a>

```typescript
public readonly organizationalUnitId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackSetId"></a>

```typescript
public readonly stackSetId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackInstancesStackInstanceSummaries;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries">CloudformationStackInstancesStackInstanceSummaries</a>

---


### CloudformationStackInstancesTimeoutsOutputReference <a name="CloudformationStackInstancesTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudformationStackInstances } from '@cdktf/provider-aws'

new cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationStackInstancesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

---



