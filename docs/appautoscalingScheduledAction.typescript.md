# `appautoscalingScheduledAction` Submodule <a name="`appautoscalingScheduledAction` Submodule" id="@cdktf/provider-aws.appautoscalingScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingScheduledAction <a name="AppautoscalingScheduledAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

new appautoscalingScheduledAction.AppautoscalingScheduledAction(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig">AppautoscalingScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig">AppautoscalingScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction">putScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putScalableTargetAction` <a name="putScalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction"></a>

```typescript
public putScalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput">scalableTargetActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction"></a>

```typescript
public readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput"></a>

```typescript
public readonly scalableDimensionInput: string;
```

- *Type:* string

---

##### `scalableTargetActionInput`<sup>Optional</sup> <a name="scalableTargetActionInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput"></a>

```typescript
public readonly scalableTargetActionInput: AppautoscalingScheduledActionScalableTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput"></a>

```typescript
public readonly serviceNamespaceInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingScheduledActionConfig <a name="AppautoscalingScheduledActionConfig" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.Initializer"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

const appautoscalingScheduledActionConfig: appautoscalingScheduledAction.AppautoscalingScheduledActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction"></a>

```typescript
public readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

### AppautoscalingScheduledActionScalableTargetAction <a name="AppautoscalingScheduledActionScalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.Initializer"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

const appautoscalingScheduledActionScalableTargetAction: appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity">minCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingScheduledActionScalableTargetActionOutputReference <a name="AppautoscalingScheduledActionScalableTargetActionOutputReference" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer"></a>

```typescript
import { appautoscalingScheduledAction } from '@cdktf/provider-aws'

new appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity">minCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: string;
```

- *Type:* string

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingScheduledActionScalableTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---



