# `cloudwatchCompositeAlarm` Submodule <a name="`cloudwatchCompositeAlarm` Submodule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchCompositeAlarm <a name="CloudwatchCompositeAlarm" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer"></a>

```typescript
import { cloudwatchCompositeAlarm } from '@cdktf/provider-aws'

new cloudwatchCompositeAlarm.CloudwatchCompositeAlarm(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig">CloudwatchCompositeAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig">CloudwatchCompositeAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled"></a>

```typescript
public resetActionsEnabled(): void
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions"></a>

```typescript
public resetAlarmActions(): void
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription"></a>

```typescript
public resetAlarmDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions"></a>

```typescript
public resetInsufficientDataActions(): void
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions"></a>

```typescript
public resetOkActions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct"></a>

```typescript
import { cloudwatchCompositeAlarm } from '@cdktf/provider-aws'

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement"></a>

```typescript
import { cloudwatchCompositeAlarm } from '@cdktf/provider-aws'

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource"></a>

```typescript
import { cloudwatchCompositeAlarm } from '@cdktf/provider-aws'

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput">alarmRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput">okActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule">alarmRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions">okActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput"></a>

```typescript
public readonly actionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput"></a>

```typescript
public readonly alarmActionsInput: string[];
```

- *Type:* string[]

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput"></a>

```typescript
public readonly alarmDescriptionInput: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `alarmRuleInput`<sup>Optional</sup> <a name="alarmRuleInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput"></a>

```typescript
public readonly alarmRuleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput"></a>

```typescript
public readonly insufficientDataActionsInput: string[];
```

- *Type:* string[]

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput"></a>

```typescript
public readonly okActionsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule"></a>

```typescript
public readonly alarmRule: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchCompositeAlarmConfig <a name="CloudwatchCompositeAlarmConfig" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.Initializer"></a>

```typescript
import { cloudwatchCompositeAlarm } from '@cdktf/provider-aws'

const cloudwatchCompositeAlarmConfig: cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule">alarmRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions">okActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}.

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule"></a>

```typescript
public readonly alarmRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}.

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}.

---



