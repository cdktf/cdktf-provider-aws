# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktf/provider-aws.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktf/provider-aws.datasyncTask.DatasyncTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task aws_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTask(scope: Construct, id: string, config: DatasyncTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes">resetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExcludes` <a name="putExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes"></a>

```typescript
public putExcludes(value: DatasyncTaskExcludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `putIncludes` <a name="putIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes"></a>

```typescript
public putIncludes(value: DatasyncTaskIncludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions"></a>

```typescript
public putOptions(value: DatasyncTaskOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule"></a>

```typescript
public putSchedule(value: DatasyncTaskSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts"></a>

```typescript
public putTimeouts(value: DatasyncTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

---

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```typescript
public resetCloudwatchLogGroupArn(): void
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes"></a>

```typescript
public resetIncludes(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

datasyncTask.DatasyncTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

datasyncTask.DatasyncTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

datasyncTask.DatasyncTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destinationLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput">includesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput">sourceLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes"></a>

```typescript
public readonly excludes: DatasyncTaskExcludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes"></a>

```typescript
public readonly includes: DatasyncTaskIncludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts"></a>

```typescript
public readonly timeouts: DatasyncTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a>

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `destinationLocationArnInput`<sup>Optional</sup> <a name="destinationLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```typescript
public readonly destinationLocationArnInput: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput"></a>

```typescript
public readonly excludesInput: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput"></a>

```typescript
public readonly includesInput: DatasyncTaskIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput"></a>

```typescript
public readonly optionsInput: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `sourceLocationArnInput`<sup>Optional</sup> <a name="sourceLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```typescript
public readonly sourceLocationArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DatasyncTaskTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> | cdktf.IResolvable

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskConfig: datasyncTask.DatasyncTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```typescript
public readonly excludes: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```typescript
public readonly includes: DatasyncTaskIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatasyncTaskTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskExcludes: datasyncTask.DatasyncTaskExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskIncludes: datasyncTask.DatasyncTaskIncludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskOptions: datasyncTask.DatasyncTaskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel">logLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode">transferMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode">verifyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}.

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="bytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}.

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}.

---

##### `overwriteMode`<sup>Optional</sup> <a name="overwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

##### `posixPermissions`<sup>Optional</sup> <a name="posixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="preserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

##### `preserveDevices`<sup>Optional</sup> <a name="preserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

##### `securityDescriptorCopyFlags`<sup>Optional</sup> <a name="securityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```typescript
public readonly securityDescriptorCopyFlags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}.

---

##### `taskQueueing`<sup>Optional</sup> <a name="taskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

##### `transferMode`<sup>Optional</sup> <a name="transferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}.

---

##### `verifyMode`<sup>Optional</sup> <a name="verifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskSchedule: datasyncTask.DatasyncTaskSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

### DatasyncTaskTimeouts <a name="DatasyncTaskTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

const datasyncTaskTimeouts: datasyncTask.DatasyncTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTaskExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTaskIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTaskOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">resetAtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">resetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">resetMtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">resetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">resetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">resetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">resetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">resetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">resetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">resetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">resetVerifyMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtime` <a name="resetAtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```typescript
public resetAtime(): void
```

##### `resetBytesPerSecond` <a name="resetBytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```typescript
public resetBytesPerSecond(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMtime` <a name="resetMtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```typescript
public resetMtime(): void
```

##### `resetOverwriteMode` <a name="resetOverwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```typescript
public resetOverwriteMode(): void
```

##### `resetPosixPermissions` <a name="resetPosixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```typescript
public resetPosixPermissions(): void
```

##### `resetPreserveDeletedFiles` <a name="resetPreserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```typescript
public resetPreserveDeletedFiles(): void
```

##### `resetPreserveDevices` <a name="resetPreserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```typescript
public resetPreserveDevices(): void
```

##### `resetSecurityDescriptorCopyFlags` <a name="resetSecurityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```typescript
public resetSecurityDescriptorCopyFlags(): void
```

##### `resetTaskQueueing` <a name="resetTaskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```typescript
public resetTaskQueueing(): void
```

##### `resetTransferMode` <a name="resetTransferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```typescript
public resetTransferMode(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```

##### `resetVerifyMode` <a name="resetVerifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```typescript
public resetVerifyMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwriteModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserveDeletedFilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserveDevicesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">securityDescriptorCopyFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">taskQueueingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verifyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atimeInput`<sup>Optional</sup> <a name="atimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```typescript
public readonly atimeInput: string;
```

- *Type:* string

---

##### `bytesPerSecondInput`<sup>Optional</sup> <a name="bytesPerSecondInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```typescript
public readonly bytesPerSecondInput: number;
```

- *Type:* number

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `mtimeInput`<sup>Optional</sup> <a name="mtimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```typescript
public readonly mtimeInput: string;
```

- *Type:* string

---

##### `overwriteModeInput`<sup>Optional</sup> <a name="overwriteModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```typescript
public readonly overwriteModeInput: string;
```

- *Type:* string

---

##### `posixPermissionsInput`<sup>Optional</sup> <a name="posixPermissionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```typescript
public readonly posixPermissionsInput: string;
```

- *Type:* string

---

##### `preserveDeletedFilesInput`<sup>Optional</sup> <a name="preserveDeletedFilesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```typescript
public readonly preserveDeletedFilesInput: string;
```

- *Type:* string

---

##### `preserveDevicesInput`<sup>Optional</sup> <a name="preserveDevicesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```typescript
public readonly preserveDevicesInput: string;
```

- *Type:* string

---

##### `securityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="securityDescriptorCopyFlagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```typescript
public readonly securityDescriptorCopyFlagsInput: string;
```

- *Type:* string

---

##### `taskQueueingInput`<sup>Optional</sup> <a name="taskQueueingInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```typescript
public readonly taskQueueingInput: string;
```

- *Type:* string

---

##### `transferModeInput`<sup>Optional</sup> <a name="transferModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```typescript
public readonly transferModeInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `verifyModeInput`<sup>Optional</sup> <a name="verifyModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```typescript
public readonly verifyModeInput: string;
```

- *Type:* string

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

---

##### `securityDescriptorCopyFlags`<sup>Required</sup> <a name="securityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```typescript
public readonly securityDescriptorCopyFlags: string;
```

- *Type:* string

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTaskScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTimeoutsOutputReference <a name="DatasyncTaskTimeoutsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/provider-aws'

new datasyncTask.DatasyncTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> | cdktf.IResolvable

---



