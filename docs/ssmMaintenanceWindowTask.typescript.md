# `ssmMaintenanceWindowTask` Submodule <a name="`ssmMaintenanceWindowTask` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTask <a name="SsmMaintenanceWindowTask" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task aws_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTask(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig">SsmMaintenanceWindowTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig">SsmMaintenanceWindowTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters">putTaskInvocationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior">resetCutoffBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors">resetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn">resetServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters">resetTaskInvocationParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTargets` <a name="putTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets"></a>

```typescript
public putTargets(value: IResolvable | SsmMaintenanceWindowTaskTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]

---

##### `putTaskInvocationParameters` <a name="putTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters"></a>

```typescript
public putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---

##### `resetCutoffBehavior` <a name="resetCutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior"></a>

```typescript
public resetCutoffBehavior(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency"></a>

```typescript
public resetMaxConcurrency(): void
```

##### `resetMaxErrors` <a name="resetMaxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors"></a>

```typescript
public resetMaxErrors(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceRoleArn` <a name="resetServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn"></a>

```typescript
public resetServiceRoleArn(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets"></a>

```typescript
public resetTargets(): void
```

##### `resetTaskInvocationParameters` <a name="resetTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters"></a>

```typescript
public resetTaskInvocationParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters">taskInvocationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId">windowTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput">cutoffBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput">maxErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput">taskArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput">taskInvocationParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput">windowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior">cutoffBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency">maxConcurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors">maxErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn">taskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId">windowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets"></a>

```typescript
public readonly targets: SsmMaintenanceWindowTaskTargetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a>

---

##### `taskInvocationParameters`<sup>Required</sup> <a name="taskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```typescript
public readonly taskInvocationParameters: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `windowTaskId`<sup>Required</sup> <a name="windowTaskId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId"></a>

```typescript
public readonly windowTaskId: string;
```

- *Type:* string

---

##### `cutoffBehaviorInput`<sup>Optional</sup> <a name="cutoffBehaviorInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput"></a>

```typescript
public readonly cutoffBehaviorInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: string;
```

- *Type:* string

---

##### `maxErrorsInput`<sup>Optional</sup> <a name="maxErrorsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput"></a>

```typescript
public readonly maxErrorsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | SsmMaintenanceWindowTaskTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]

---

##### `taskArnInput`<sup>Optional</sup> <a name="taskArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput"></a>

```typescript
public readonly taskArnInput: string;
```

- *Type:* string

---

##### `taskInvocationParametersInput`<sup>Optional</sup> <a name="taskInvocationParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput"></a>

```typescript
public readonly taskInvocationParametersInput: SsmMaintenanceWindowTaskTaskInvocationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `windowIdInput`<sup>Optional</sup> <a name="windowIdInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput"></a>

```typescript
public readonly windowIdInput: string;
```

- *Type:* string

---

##### `cutoffBehavior`<sup>Required</sup> <a name="cutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```typescript
public readonly cutoffBehavior: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: string;
```

- *Type:* string

---

##### `maxErrors`<sup>Required</sup> <a name="maxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors"></a>

```typescript
public readonly maxErrors: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn"></a>

```typescript
public readonly taskArn: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTaskConfig <a name="SsmMaintenanceWindowTaskConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskConfig: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn">taskArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId">windowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior">cutoffBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors">maxErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters">taskInvocationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | task_invocation_parameters block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn"></a>

```typescript
public readonly taskArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}.

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}.

---

##### `cutoffBehavior`<sup>Optional</sup> <a name="cutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior"></a>

```typescript
public readonly cutoffBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors"></a>

```typescript
public readonly maxErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | SsmMaintenanceWindowTaskTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}

---

##### `taskInvocationParameters`<sup>Optional</sup> <a name="taskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters"></a>

```typescript
public readonly taskInvocationParameters: SsmMaintenanceWindowTaskTaskInvocationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

task_invocation_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}

---

### SsmMaintenanceWindowTaskTargets <a name="SsmMaintenanceWindowTaskTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTargets: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParameters: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.automationParameters">automationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | automation_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.lambdaParameters">lambdaParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | lambda_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.runCommandParameters">runCommandParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | run_command_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctionsParameters">stepFunctionsParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | step_functions_parameters block. |

---

##### `automationParameters`<sup>Optional</sup> <a name="automationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.automationParameters"></a>

```typescript
public readonly automationParameters: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

automation_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#automation_parameters SsmMaintenanceWindowTask#automation_parameters}

---

##### `lambdaParameters`<sup>Optional</sup> <a name="lambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.lambdaParameters"></a>

```typescript
public readonly lambdaParameters: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

lambda_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}

---

##### `runCommandParameters`<sup>Optional</sup> <a name="runCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.runCommandParameters"></a>

```typescript
public readonly runCommandParameters: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

run_command_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}

---

##### `stepFunctionsParameters`<sup>Optional</sup> <a name="stepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctionsParameters"></a>

```typescript
public readonly stepFunctionsParameters: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

step_functions_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}

---

### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.documentVersion">documentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]</code> | parameter block. |

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}

---

### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.clientContext">clientContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}. |

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.clientContext"></a>

```typescript
public readonly clientContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | cloudwatch_config block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHash">documentHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHashType">documentHashType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentVersion">documentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3Bucket">outputS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}. |

---

##### `cloudwatchConfig`<sup>Optional</sup> <a name="cloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

cloudwatch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}.

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHash"></a>

```typescript
public readonly documentHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}.

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHashType"></a>

```typescript
public readonly documentHashType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}.

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}

---

##### `outputS3Bucket`<sup>Optional</sup> <a name="outputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3Bucket"></a>

```typescript
public readonly outputS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}. |

---

##### `cloudwatchLogGroupName`<sup>Optional</sup> <a name="cloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchLogGroupName"></a>

```typescript
public readonly cloudwatchLogGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}.

---

##### `cloudwatchOutputEnabled`<sup>Optional</sup> <a name="cloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchOutputEnabled"></a>

```typescript
public readonly cloudwatchOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationArn">notificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationEvents">notificationEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}. |

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationArn"></a>

```typescript
public readonly notificationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}.

---

##### `notificationEvents`<sup>Optional</sup> <a name="notificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationEvents"></a>

```typescript
public readonly notificationEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}.

---

##### `notificationType`<sup>Optional</sup> <a name="notificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters: ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTaskTargetsList <a name="SsmMaintenanceWindowTaskTargetsList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get"></a>

```typescript
public get(index: number): SsmMaintenanceWindowTaskTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTaskTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>[]

---


### SsmMaintenanceWindowTaskTargetsOutputReference <a name="SsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTargets | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a> | cdktf.IResolvable

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]

---

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetDocumentVersion"></a>

```typescript
public resetDocumentVersion(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersionInput">documentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameter"></a>

```typescript
public readonly parameter: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList</a>

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersionInput"></a>

```typescript
public readonly documentVersionInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get"></a>

```typescript
public get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a>[]

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter</a> | cdktf.IResolvable

---


### SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetClientContext">resetClientContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetQualifier">resetQualifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientContext` <a name="resetClientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetClientContext"></a>

```typescript
public resetClientContext(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetQualifier"></a>

```typescript
public resetQualifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContextInput">clientContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContext">clientContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientContextInput`<sup>Optional</sup> <a name="clientContextInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContextInput"></a>

```typescript
public readonly clientContextInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `clientContext`<sup>Required</sup> <a name="clientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContext"></a>

```typescript
public readonly clientContext: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters">putAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters">putLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters">putRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters">putStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetAutomationParameters">resetAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetLambdaParameters">resetLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetRunCommandParameters">resetRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetStepFunctionsParameters">resetStepFunctionsParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationParameters` <a name="putAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters"></a>

```typescript
public putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---

##### `putLambdaParameters` <a name="putLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters"></a>

```typescript
public putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---

##### `putRunCommandParameters` <a name="putRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters"></a>

```typescript
public putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---

##### `putStepFunctionsParameters` <a name="putStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters"></a>

```typescript
public putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---

##### `resetAutomationParameters` <a name="resetAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetAutomationParameters"></a>

```typescript
public resetAutomationParameters(): void
```

##### `resetLambdaParameters` <a name="resetLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetLambdaParameters"></a>

```typescript
public resetLambdaParameters(): void
```

##### `resetRunCommandParameters` <a name="resetRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetRunCommandParameters"></a>

```typescript
public resetRunCommandParameters(): void
```

##### `resetStepFunctionsParameters` <a name="resetStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetStepFunctionsParameters"></a>

```typescript
public resetStepFunctionsParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParameters">automationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParameters">lambdaParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParameters">runCommandParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParameters">stepFunctionsParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParametersInput">automationParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParametersInput">lambdaParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParametersInput">runCommandParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParametersInput">stepFunctionsParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParameters"></a>

```typescript
public readonly automationParameters: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference</a>

---

##### `lambdaParameters`<sup>Required</sup> <a name="lambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParameters"></a>

```typescript
public readonly lambdaParameters: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference</a>

---

##### `runCommandParameters`<sup>Required</sup> <a name="runCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParameters"></a>

```typescript
public readonly runCommandParameters: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference</a>

---

##### `stepFunctionsParameters`<sup>Required</sup> <a name="stepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParameters"></a>

```typescript
public readonly stepFunctionsParameters: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference</a>

---

##### `automationParametersInput`<sup>Optional</sup> <a name="automationParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParametersInput"></a>

```typescript
public readonly automationParametersInput: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---

##### `lambdaParametersInput`<sup>Optional</sup> <a name="lambdaParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParametersInput"></a>

```typescript
public readonly lambdaParametersInput: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---

##### `runCommandParametersInput`<sup>Optional</sup> <a name="runCommandParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParametersInput"></a>

```typescript
public readonly runCommandParametersInput: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---

##### `stepFunctionsParametersInput`<sup>Optional</sup> <a name="stepFunctionsParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParametersInput"></a>

```typescript
public readonly stepFunctionsParametersInput: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchLogGroupName">resetCloudwatchLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchOutputEnabled">resetCloudwatchOutputEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogGroupName` <a name="resetCloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchLogGroupName"></a>

```typescript
public resetCloudwatchLogGroupName(): void
```

##### `resetCloudwatchOutputEnabled` <a name="resetCloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchOutputEnabled"></a>

```typescript
public resetCloudwatchOutputEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupNameInput">cloudwatchLogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabledInput">cloudwatchOutputEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupNameInput`<sup>Optional</sup> <a name="cloudwatchLogGroupNameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupNameInput"></a>

```typescript
public readonly cloudwatchLogGroupNameInput: string;
```

- *Type:* string

---

##### `cloudwatchOutputEnabledInput`<sup>Optional</sup> <a name="cloudwatchOutputEnabledInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabledInput"></a>

```typescript
public readonly cloudwatchOutputEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchLogGroupName`<sup>Required</sup> <a name="cloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupName"></a>

```typescript
public readonly cloudwatchLogGroupName: string;
```

- *Type:* string

---

##### `cloudwatchOutputEnabled`<sup>Required</sup> <a name="cloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```typescript
public readonly cloudwatchOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationArn">resetNotificationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents">resetNotificationEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationType">resetNotificationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationArn` <a name="resetNotificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationArn"></a>

```typescript
public resetNotificationArn(): void
```

##### `resetNotificationEvents` <a name="resetNotificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents"></a>

```typescript
public resetNotificationEvents(): void
```

##### `resetNotificationType` <a name="resetNotificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationType"></a>

```typescript
public resetNotificationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput">notificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput">notificationEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArn">notificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">notificationEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationArnInput`<sup>Optional</sup> <a name="notificationArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput"></a>

```typescript
public readonly notificationArnInput: string;
```

- *Type:* string

---

##### `notificationEventsInput`<sup>Optional</sup> <a name="notificationEventsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput"></a>

```typescript
public readonly notificationEventsInput: string[];
```

- *Type:* string[]

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `notificationArn`<sup>Required</sup> <a name="notificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```typescript
public readonly notificationArn: string;
```

- *Type:* string

---

##### `notificationEvents`<sup>Required</sup> <a name="notificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```typescript
public readonly notificationEvents: string[];
```

- *Type:* string[]

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig">putCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetCloudwatchConfig">resetCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHash">resetDocumentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHashType">resetDocumentHashType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3Bucket">resetOutputS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3KeyPrefix">resetOutputS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetServiceRoleArn">resetServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchConfig` <a name="putCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig"></a>

```typescript
public putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]

---

##### `resetCloudwatchConfig` <a name="resetCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetCloudwatchConfig"></a>

```typescript
public resetCloudwatchConfig(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDocumentHash` <a name="resetDocumentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHash"></a>

```typescript
public resetDocumentHash(): void
```

##### `resetDocumentHashType` <a name="resetDocumentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHashType"></a>

```typescript
public resetDocumentHashType(): void
```

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentVersion"></a>

```typescript
public resetDocumentVersion(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```

##### `resetOutputS3Bucket` <a name="resetOutputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3Bucket"></a>

```typescript
public resetOutputS3Bucket(): void
```

##### `resetOutputS3KeyPrefix` <a name="resetOutputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3KeyPrefix"></a>

```typescript
public resetOutputS3KeyPrefix(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetServiceRoleArn` <a name="resetServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetServiceRoleArn"></a>

```typescript
public resetServiceRoleArn(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfigInput">cloudwatchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashInput">documentHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashTypeInput">documentHashTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersionInput">documentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3BucketInput">outputS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefixInput">outputS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHash">documentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashType">documentHashType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3Bucket">outputS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference</a>

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameter"></a>

```typescript
public readonly parameter: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList</a>

---

##### `cloudwatchConfigInput`<sup>Optional</sup> <a name="cloudwatchConfigInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfigInput"></a>

```typescript
public readonly cloudwatchConfigInput: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `documentHashInput`<sup>Optional</sup> <a name="documentHashInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashInput"></a>

```typescript
public readonly documentHashInput: string;
```

- *Type:* string

---

##### `documentHashTypeInput`<sup>Optional</sup> <a name="documentHashTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashTypeInput"></a>

```typescript
public readonly documentHashTypeInput: string;
```

- *Type:* string

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersionInput"></a>

```typescript
public readonly documentVersionInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---

##### `outputS3BucketInput`<sup>Optional</sup> <a name="outputS3BucketInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3BucketInput"></a>

```typescript
public readonly outputS3BucketInput: string;
```

- *Type:* string

---

##### `outputS3KeyPrefixInput`<sup>Optional</sup> <a name="outputS3KeyPrefixInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefixInput"></a>

```typescript
public readonly outputS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `documentHash`<sup>Required</sup> <a name="documentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHash"></a>

```typescript
public readonly documentHash: string;
```

- *Type:* string

---

##### `documentHashType`<sup>Required</sup> <a name="documentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashType"></a>

```typescript
public readonly documentHashType: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `outputS3Bucket`<sup>Required</sup> <a name="outputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3Bucket"></a>

```typescript
public readonly outputS3Bucket: string;
```

- *Type:* string

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="outputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get"></a>

```typescript
public get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a>[]

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter</a> | cdktf.IResolvable

---


### SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTask } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInput` <a name="resetInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---



