# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktf/provider-aws.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunch(scope: Construct, id: string, config: EvidentlyLaunchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">putMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">putScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">resetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">resetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig">resetScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGroups` <a name="putGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```typescript
public putGroups(value: IResolvable | EvidentlyLaunchGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]

---

##### `putMetricMonitors` <a name="putMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```typescript
public putMetricMonitors(value: IResolvable | EvidentlyLaunchMetricMonitors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]

---

##### `putScheduledSplitsConfig` <a name="putScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```typescript
public putScheduledSplitsConfig(value: EvidentlyLaunchScheduledSplitsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts"></a>

```typescript
public putTimeouts(value: EvidentlyLaunchTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricMonitors` <a name="resetMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```typescript
public resetMetricMonitors(): void
```

##### `resetRandomizationSalt` <a name="resetRandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```typescript
public resetRandomizationSalt(): void
```

##### `resetScheduledSplitsConfig` <a name="resetScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig"></a>

```typescript
public resetScheduledSplitsConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

evidentlyLaunch.EvidentlyLaunch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

evidentlyLaunch.EvidentlyLaunch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

evidentlyLaunch.EvidentlyLaunch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution">execution</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">metricMonitors</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">groupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">metricMonitorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">randomizationSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">scheduledSplitsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `execution`<sup>Required</sup> <a name="execution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution"></a>

```typescript
public readonly execution: EvidentlyLaunchExecutionList;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```typescript
public readonly groups: EvidentlyLaunchGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `metricMonitors`<sup>Required</sup> <a name="metricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```typescript
public readonly metricMonitors: EvidentlyLaunchMetricMonitorsList;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: EvidentlyLaunchScheduledSplitsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts"></a>

```typescript
public readonly timeouts: EvidentlyLaunchTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```typescript
public readonly groupsInput: IResolvable | EvidentlyLaunchGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricMonitorsInput`<sup>Optional</sup> <a name="metricMonitorsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```typescript
public readonly metricMonitorsInput: IResolvable | EvidentlyLaunchMetricMonitors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `randomizationSaltInput`<sup>Optional</sup> <a name="randomizationSaltInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```typescript
public readonly randomizationSaltInput: string;
```

- *Type:* string

---

##### `scheduledSplitsConfigInput`<sup>Optional</sup> <a name="scheduledSplitsConfigInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```typescript
public readonly scheduledSplitsConfigInput: EvidentlyLaunchScheduledSplitsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EvidentlyLaunchTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `randomizationSalt`<sup>Required</sup> <a name="randomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchConfig: evidentlyLaunch.EvidentlyLaunchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">groups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]</code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">metricMonitors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]</code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```typescript
public readonly groups: IResolvable | EvidentlyLaunchGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```typescript
public readonly metricMonitors: IResolvable | EvidentlyLaunchMetricMonitors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `scheduledSplitsConfig`<sup>Optional</sup> <a name="scheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: EvidentlyLaunchScheduledSplitsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EvidentlyLaunchTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

### EvidentlyLaunchExecution <a name="EvidentlyLaunchExecution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchExecution: evidentlyLaunch.EvidentlyLaunchExecution = { ... }
```


### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchGroups: evidentlyLaunch.EvidentlyLaunchGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchMetricMonitors: evidentlyLaunch.EvidentlyLaunchMetricMonitors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition">metricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | metric_definition block. |

---

##### `metricDefinition`<sup>Required</sup> <a name="metricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition"></a>

```typescript
public readonly metricDefinition: EvidentlyLaunchMetricMonitorsMetricDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

metric_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}

---

### EvidentlyLaunchMetricMonitorsMetricDefinition <a name="EvidentlyLaunchMetricMonitorsMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchMetricMonitorsMetricDefinition: evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey">valueKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern">eventPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel">unitLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchScheduledSplitsConfig: evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]</code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | EvidentlyLaunchScheduledSplitsConfigSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

### EvidentlyLaunchScheduledSplitsConfigSteps <a name="EvidentlyLaunchScheduledSplitsConfigSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchScheduledSplitsConfigSteps: evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights">groupWeights</a></code> | <code>{[ key: string ]: number}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides">segmentOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]</code> | segment_overrides block. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights"></a>

```typescript
public readonly groupWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `segmentOverrides`<sup>Optional</sup> <a name="segmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides"></a>

```typescript
public readonly segmentOverrides: IResolvable | EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]

segment_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}

---

### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides: evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder">evaluationOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment">segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights">weights</a></code> | <code>{[ key: string ]: number}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `evaluationOrder`<sup>Required</sup> <a name="evaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder"></a>

```typescript
public readonly evaluationOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights"></a>

```typescript
public readonly weights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchTimeouts <a name="EvidentlyLaunchTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

const evidentlyLaunchTimeouts: evidentlyLaunch.EvidentlyLaunchTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionList <a name="EvidentlyLaunchExecutionList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchExecutionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get"></a>

```typescript
public get(index: number): EvidentlyLaunchExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EvidentlyLaunchExecutionOutputReference <a name="EvidentlyLaunchExecutionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchExecutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime">endedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime">startedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endedTime`<sup>Required</sup> <a name="endedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime"></a>

```typescript
public readonly endedTime: string;
```

- *Type:* string

---

##### `startedTime`<sup>Required</sup> <a name="startedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime"></a>

```typescript
public readonly startedTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchExecution;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```typescript
public get(index: number): EvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyLaunchGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>[]

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">featureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">variationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```typescript
public readonly featureInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchGroups | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a> | cdktf.IResolvable

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchMetricMonitorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```typescript
public get(index: number): EvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyLaunchMetricMonitors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>[]

---


### EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference <a name="EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern"></a>

```typescript
public resetEventPattern(): void
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel"></a>

```typescript
public resetUnitLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput">entityIdKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel">unitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey">valueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdKeyInput`<sup>Optional</sup> <a name="entityIdKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput"></a>

```typescript
public readonly entityIdKeyInput: string;
```

- *Type:* string

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput"></a>

```typescript
public readonly eventPatternInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput"></a>

```typescript
public readonly unitLabelInput: string;
```

- *Type:* string

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput"></a>

```typescript
public readonly valueKeyInput: string;
```

- *Type:* string

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchMetricMonitorsMetricDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition">putMetricDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinition` <a name="putMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition"></a>

```typescript
public putMetricDefinition(value: EvidentlyLaunchMetricMonitorsMetricDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition">metricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput">metricDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDefinition`<sup>Required</sup> <a name="metricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition"></a>

```typescript
public readonly metricDefinition: EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a>

---

##### `metricDefinitionInput`<sup>Optional</sup> <a name="metricDefinitionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput"></a>

```typescript
public readonly metricDefinitionInput: EvidentlyLaunchMetricMonitorsMetricDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchMetricMonitors | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a> | cdktf.IResolvable

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps">putSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | EvidentlyLaunchScheduledSplitsConfigSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps"></a>

```typescript
public readonly steps: EvidentlyLaunchScheduledSplitsConfigStepsList;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | EvidentlyLaunchScheduledSplitsConfigSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchScheduledSplitsConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigStepsList <a name="EvidentlyLaunchScheduledSplitsConfigStepsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get"></a>

```typescript
public get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyLaunchScheduledSplitsConfigSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>[]

---


### EvidentlyLaunchScheduledSplitsConfigStepsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides">putSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides">resetSegmentOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentOverrides` <a name="putSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides"></a>

```typescript
public putSegmentOverrides(value: IResolvable | EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]

---

##### `resetSegmentOverrides` <a name="resetSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides"></a>

```typescript
public resetSegmentOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides">segmentOverrides</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput">groupWeightsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput">segmentOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights">groupWeights</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentOverrides`<sup>Required</sup> <a name="segmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides"></a>

```typescript
public readonly segmentOverrides: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a>

---

##### `groupWeightsInput`<sup>Optional</sup> <a name="groupWeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput"></a>

```typescript
public readonly groupWeightsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `segmentOverridesInput`<sup>Optional</sup> <a name="segmentOverridesInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput"></a>

```typescript
public readonly segmentOverridesInput: IResolvable | EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights"></a>

```typescript
public readonly groupWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchScheduledSplitsConfigSteps | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a> | cdktf.IResolvable

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get"></a>

```typescript
public get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>[]

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput">evaluationOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput">segmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput">weightsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder">evaluationOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights">weights</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationOrderInput`<sup>Optional</sup> <a name="evaluationOrderInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```typescript
public readonly evaluationOrderInput: number;
```

- *Type:* number

---

##### `segmentInput`<sup>Optional</sup> <a name="segmentInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput"></a>

```typescript
public readonly segmentInput: string;
```

- *Type:* string

---

##### `weightsInput`<sup>Optional</sup> <a name="weightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput"></a>

```typescript
public readonly weightsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `evaluationOrder`<sup>Required</sup> <a name="evaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder"></a>

```typescript
public readonly evaluationOrder: number;
```

- *Type:* number

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment"></a>

```typescript
public readonly segment: string;
```

- *Type:* string

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights"></a>

```typescript
public readonly weights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a> | cdktf.IResolvable

---


### EvidentlyLaunchTimeoutsOutputReference <a name="EvidentlyLaunchTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer"></a>

```typescript
import { evidentlyLaunch } from '@cdktf/provider-aws'

new evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyLaunchTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> | cdktf.IResolvable

---



