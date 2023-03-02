# `elb` Submodule <a name="`elb` Submodule" id="@cdktf/provider-aws.elb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elb <a name="Elb" id="@cdktf/provider-aws.elb.Elb"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb aws_elb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elb.Elb.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

new elb.Elb(scope: Construct, id: string, config: ElbConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.Elb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbConfig">ElbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elb.Elb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elb.Elb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elb.Elb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbConfig">ElbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.Elb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.putAccessLogs">putAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.putListener">putListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetAccessLogs">resetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetConnectionDraining">resetConnectionDraining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetConnectionDrainingTimeout">resetConnectionDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetCrossZoneLoadBalancing">resetCrossZoneLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetDesyncMitigationMode">resetDesyncMitigationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetSourceSecurityGroup">resetSourceSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elb.Elb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elb.Elb.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elb.Elb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elb.Elb.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elb.Elb.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elb.Elb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elb.Elb.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elb.Elb.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elb.Elb.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elb.Elb.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elb.Elb.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elb.Elb.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elb.Elb.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elb.Elb.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elb.Elb.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elb.Elb.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.Elb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessLogs` <a name="putAccessLogs" id="@cdktf/provider-aws.elb.Elb.putAccessLogs"></a>

```typescript
public putAccessLogs(value: ElbAccessLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elb.Elb.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.elb.Elb.putHealthCheck"></a>

```typescript
public putHealthCheck(value: ElbHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elb.Elb.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a>

---

##### `putListener` <a name="putListener" id="@cdktf/provider-aws.elb.Elb.putListener"></a>

```typescript
public putListener(value: IResolvable | ElbListener[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elb.Elb.putListener.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]

---

##### `resetAccessLogs` <a name="resetAccessLogs" id="@cdktf/provider-aws.elb.Elb.resetAccessLogs"></a>

```typescript
public resetAccessLogs(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.elb.Elb.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetConnectionDraining` <a name="resetConnectionDraining" id="@cdktf/provider-aws.elb.Elb.resetConnectionDraining"></a>

```typescript
public resetConnectionDraining(): void
```

##### `resetConnectionDrainingTimeout` <a name="resetConnectionDrainingTimeout" id="@cdktf/provider-aws.elb.Elb.resetConnectionDrainingTimeout"></a>

```typescript
public resetConnectionDrainingTimeout(): void
```

##### `resetCrossZoneLoadBalancing` <a name="resetCrossZoneLoadBalancing" id="@cdktf/provider-aws.elb.Elb.resetCrossZoneLoadBalancing"></a>

```typescript
public resetCrossZoneLoadBalancing(): void
```

##### `resetDesyncMitigationMode` <a name="resetDesyncMitigationMode" id="@cdktf/provider-aws.elb.Elb.resetDesyncMitigationMode"></a>

```typescript
public resetDesyncMitigationMode(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.elb.Elb.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elb.Elb.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-aws.elb.Elb.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-aws.elb.Elb.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-aws.elb.Elb.resetInternal"></a>

```typescript
public resetInternal(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.elb.Elb.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.elb.Elb.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.elb.Elb.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSourceSecurityGroup` <a name="resetSourceSecurityGroup" id="@cdktf/provider-aws.elb.Elb.resetSourceSecurityGroup"></a>

```typescript
public resetSourceSecurityGroup(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.elb.Elb.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elb.Elb.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elb.Elb.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.Elb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elb.Elb.isConstruct"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

elb.Elb.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elb.Elb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elb.Elb.isTerraformElement"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

elb.Elb.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elb.Elb.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elb.Elb.isTerraformResource"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

elb.Elb.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elb.Elb.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference">ElbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference">ElbHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbListenerList">ElbListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.accessLogsInput">accessLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.connectionDrainingInput">connectionDrainingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.connectionDrainingTimeoutInput">connectionDrainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.crossZoneLoadBalancingInput">crossZoneLoadBalancingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.desyncMitigationModeInput">desyncMitigationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.internalInput">internalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.listenerInput">listenerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroupInput">sourceSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.connectionDraining">connectionDraining</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.connectionDrainingTimeout">connectionDrainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.crossZoneLoadBalancing">crossZoneLoadBalancing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroup">sourceSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elb.Elb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elb.Elb.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elb.Elb.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elb.Elb.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elb.Elb.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elb.Elb.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elb.Elb.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elb.Elb.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elb.Elb.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elb.Elb.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elb.Elb.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elb.Elb.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elb.Elb.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elb.Elb.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktf/provider-aws.elb.Elb.property.accessLogs"></a>

```typescript
public readonly accessLogs: ElbAccessLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference">ElbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elb.Elb.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.elb.Elb.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.elb.Elb.property.healthCheck"></a>

```typescript
public readonly healthCheck: ElbHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference">ElbHealthCheckOutputReference</a>

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.elb.Elb.property.listener"></a>

```typescript
public readonly listener: ElbListenerList;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbListenerList">ElbListenerList</a>

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.elb.Elb.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `accessLogsInput`<sup>Optional</sup> <a name="accessLogsInput" id="@cdktf/provider-aws.elb.Elb.property.accessLogsInput"></a>

```typescript
public readonly accessLogsInput: ElbAccessLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.elb.Elb.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `connectionDrainingInput`<sup>Optional</sup> <a name="connectionDrainingInput" id="@cdktf/provider-aws.elb.Elb.property.connectionDrainingInput"></a>

```typescript
public readonly connectionDrainingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionDrainingTimeoutInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutInput" id="@cdktf/provider-aws.elb.Elb.property.connectionDrainingTimeoutInput"></a>

```typescript
public readonly connectionDrainingTimeoutInput: number;
```

- *Type:* number

---

##### `crossZoneLoadBalancingInput`<sup>Optional</sup> <a name="crossZoneLoadBalancingInput" id="@cdktf/provider-aws.elb.Elb.property.crossZoneLoadBalancingInput"></a>

```typescript
public readonly crossZoneLoadBalancingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desyncMitigationModeInput`<sup>Optional</sup> <a name="desyncMitigationModeInput" id="@cdktf/provider-aws.elb.Elb.property.desyncMitigationModeInput"></a>

```typescript
public readonly desyncMitigationModeInput: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.elb.Elb.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: ElbHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elb.Elb.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-aws.elb.Elb.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: number;
```

- *Type:* number

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-aws.elb.Elb.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-aws.elb.Elb.property.internalInput"></a>

```typescript
public readonly internalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `listenerInput`<sup>Optional</sup> <a name="listenerInput" id="@cdktf/provider-aws.elb.Elb.property.listenerInput"></a>

```typescript
public readonly listenerInput: IResolvable | ElbListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elb.Elb.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.elb.Elb.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.elb.Elb.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `sourceSecurityGroupInput`<sup>Optional</sup> <a name="sourceSecurityGroupInput" id="@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroupInput"></a>

```typescript
public readonly sourceSecurityGroupInput: string;
```

- *Type:* string

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.elb.Elb.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elb.Elb.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elb.Elb.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elb.Elb.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `connectionDraining`<sup>Required</sup> <a name="connectionDraining" id="@cdktf/provider-aws.elb.Elb.property.connectionDraining"></a>

```typescript
public readonly connectionDraining: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionDrainingTimeout`<sup>Required</sup> <a name="connectionDrainingTimeout" id="@cdktf/provider-aws.elb.Elb.property.connectionDrainingTimeout"></a>

```typescript
public readonly connectionDrainingTimeout: number;
```

- *Type:* number

---

##### `crossZoneLoadBalancing`<sup>Required</sup> <a name="crossZoneLoadBalancing" id="@cdktf/provider-aws.elb.Elb.property.crossZoneLoadBalancing"></a>

```typescript
public readonly crossZoneLoadBalancing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desyncMitigationMode`<sup>Required</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.elb.Elb.property.desyncMitigationMode"></a>

```typescript
public readonly desyncMitigationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elb.Elb.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-aws.elb.Elb.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-aws.elb.Elb.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.elb.Elb.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elb.Elb.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.elb.Elb.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.elb.Elb.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sourceSecurityGroup`<sup>Required</sup> <a name="sourceSecurityGroup" id="@cdktf/provider-aws.elb.Elb.property.sourceSecurityGroup"></a>

```typescript
public readonly sourceSecurityGroup: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.elb.Elb.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elb.Elb.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elb.Elb.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.Elb.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elb.Elb.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElbAccessLogs <a name="ElbAccessLogs" id="@cdktf/provider-aws.elb.ElbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elb.ElbAccessLogs.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

const elbAccessLogs: elb.ElbAccessLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#bucket Elb#bucket}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#bucket_prefix Elb#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#enabled Elb#enabled}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#interval Elb#interval}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elb.ElbAccessLogs.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#bucket Elb#bucket}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.elb.ElbAccessLogs.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#bucket_prefix Elb#bucket_prefix}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elb.ElbAccessLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#enabled Elb#enabled}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.elb.ElbAccessLogs.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#interval Elb#interval}.

---

### ElbConfig <a name="ElbConfig" id="@cdktf/provider-aws.elb.ElbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elb.ElbConfig.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

const elbConfig: elb.ElbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.listener">listener</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]</code> | listener block. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#availability_zones Elb#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.connectionDraining">connectionDraining</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#connection_draining Elb#connection_draining}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.connectionDrainingTimeout">connectionDrainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#connection_draining_timeout Elb#connection_draining_timeout}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.crossZoneLoadBalancing">crossZoneLoadBalancing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#cross_zone_load_balancing Elb#cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#desync_mitigation_mode Elb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#id Elb#id}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#idle_timeout Elb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.instances">instances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instances Elb#instances}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#internal Elb#internal}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#name Elb#name}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#name_prefix Elb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#security_groups Elb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.sourceSecurityGroup">sourceSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#source_security_group Elb#source_security_group}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#subnets Elb#subnets}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#tags Elb#tags}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#tags_all Elb#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elb.ElbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elb.ElbConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elb.ElbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elb.ElbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elb.ElbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elb.ElbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elb.ElbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.elb.ElbConfig.property.listener"></a>

```typescript
public readonly listener: IResolvable | ElbListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#listener Elb#listener}

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/provider-aws.elb.ElbConfig.property.accessLogs"></a>

```typescript
public readonly accessLogs: ElbAccessLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#access_logs Elb#access_logs}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elb.ElbConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#availability_zones Elb#availability_zones}.

---

##### `connectionDraining`<sup>Optional</sup> <a name="connectionDraining" id="@cdktf/provider-aws.elb.ElbConfig.property.connectionDraining"></a>

```typescript
public readonly connectionDraining: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#connection_draining Elb#connection_draining}.

---

##### `connectionDrainingTimeout`<sup>Optional</sup> <a name="connectionDrainingTimeout" id="@cdktf/provider-aws.elb.ElbConfig.property.connectionDrainingTimeout"></a>

```typescript
public readonly connectionDrainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#connection_draining_timeout Elb#connection_draining_timeout}.

---

##### `crossZoneLoadBalancing`<sup>Optional</sup> <a name="crossZoneLoadBalancing" id="@cdktf/provider-aws.elb.ElbConfig.property.crossZoneLoadBalancing"></a>

```typescript
public readonly crossZoneLoadBalancing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#cross_zone_load_balancing Elb#cross_zone_load_balancing}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.elb.ElbConfig.property.desyncMitigationMode"></a>

```typescript
public readonly desyncMitigationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#desync_mitigation_mode Elb#desync_mitigation_mode}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.elb.ElbConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: ElbHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#health_check Elb#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elb.ElbConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#id Elb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.elb.ElbConfig.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#idle_timeout Elb#idle_timeout}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-aws.elb.ElbConfig.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instances Elb#instances}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.elb.ElbConfig.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#internal Elb#internal}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elb.ElbConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#name Elb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.elb.ElbConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#name_prefix Elb#name_prefix}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.elb.ElbConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#security_groups Elb#security_groups}.

---

##### `sourceSecurityGroup`<sup>Optional</sup> <a name="sourceSecurityGroup" id="@cdktf/provider-aws.elb.ElbConfig.property.sourceSecurityGroup"></a>

```typescript
public readonly sourceSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#source_security_group Elb#source_security_group}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.elb.ElbConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#subnets Elb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elb.ElbConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#tags Elb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elb.ElbConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#tags_all Elb#tags_all}.

---

### ElbHealthCheck <a name="ElbHealthCheck" id="@cdktf/provider-aws.elb.ElbHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elb.ElbHealthCheck.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

const elbHealthCheck: elb.ElbHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#healthy_threshold Elb#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#interval Elb#interval}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#target Elb#target}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#timeout Elb#timeout}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#unhealthy_threshold Elb#unhealthy_threshold}. |

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.elb.ElbHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#healthy_threshold Elb#healthy_threshold}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elb.ElbHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#interval Elb#interval}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.elb.ElbHealthCheck.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#target Elb#target}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.elb.ElbHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#timeout Elb#timeout}.

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.elb.ElbHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#unhealthy_threshold Elb#unhealthy_threshold}.

---

### ElbListener <a name="ElbListener" id="@cdktf/provider-aws.elb.ElbListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elb.ElbListener.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

const elbListener: elb.ElbListener = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListener.property.instancePort">instancePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instance_port Elb#instance_port}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListener.property.instanceProtocol">instanceProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instance_protocol Elb#instance_protocol}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListener.property.lbPort">lbPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#lb_port Elb#lb_port}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListener.property.lbProtocol">lbProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#lb_protocol Elb#lb_protocol}. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListener.property.sslCertificateId">sslCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#ssl_certificate_id Elb#ssl_certificate_id}. |

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktf/provider-aws.elb.ElbListener.property.instancePort"></a>

```typescript
public readonly instancePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instance_port Elb#instance_port}.

---

##### `instanceProtocol`<sup>Required</sup> <a name="instanceProtocol" id="@cdktf/provider-aws.elb.ElbListener.property.instanceProtocol"></a>

```typescript
public readonly instanceProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#instance_protocol Elb#instance_protocol}.

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/provider-aws.elb.ElbListener.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#lb_port Elb#lb_port}.

---

##### `lbProtocol`<sup>Required</sup> <a name="lbProtocol" id="@cdktf/provider-aws.elb.ElbListener.property.lbProtocol"></a>

```typescript
public readonly lbProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#lb_protocol Elb#lb_protocol}.

---

##### `sslCertificateId`<sup>Optional</sup> <a name="sslCertificateId" id="@cdktf/provider-aws.elb.ElbListener.property.sslCertificateId"></a>

```typescript
public readonly sslCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb#ssl_certificate_id Elb#ssl_certificate_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElbAccessLogsOutputReference <a name="ElbAccessLogsOutputReference" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

new elb.ElbAccessLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elb.ElbAccessLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElbAccessLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbAccessLogs">ElbAccessLogs</a>

---


### ElbHealthCheckOutputReference <a name="ElbHealthCheckOutputReference" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

new elb.ElbHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elb.ElbHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElbHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbHealthCheck">ElbHealthCheck</a>

---


### ElbListenerList <a name="ElbListenerList" id="@cdktf/provider-aws.elb.ElbListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elb.ElbListenerList.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

new elb.ElbListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elb.ElbListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elb.ElbListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elb.ElbListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elb.ElbListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elb.ElbListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elb.ElbListenerList.get"></a>

```typescript
public get(index: number): ElbListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elb.ElbListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elb.ElbListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elb.ElbListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elb.ElbListenerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElbListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a>[]

---


### ElbListenerOutputReference <a name="ElbListenerOutputReference" id="@cdktf/provider-aws.elb.ElbListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer"></a>

```typescript
import { elb } from '@cdktf/provider-aws'

new elb.ElbListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.resetSslCertificateId">resetSslCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslCertificateId` <a name="resetSslCertificateId" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.resetSslCertificateId"></a>

```typescript
public resetSslCertificateId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instancePortInput">instancePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instanceProtocolInput">instanceProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbPortInput">lbPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbProtocolInput">lbProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.sslCertificateIdInput">sslCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instancePort">instancePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instanceProtocol">instanceProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbPort">lbPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbProtocol">lbProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.sslCertificateId">sslCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elb.ElbListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancePortInput`<sup>Optional</sup> <a name="instancePortInput" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instancePortInput"></a>

```typescript
public readonly instancePortInput: number;
```

- *Type:* number

---

##### `instanceProtocolInput`<sup>Optional</sup> <a name="instanceProtocolInput" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instanceProtocolInput"></a>

```typescript
public readonly instanceProtocolInput: string;
```

- *Type:* string

---

##### `lbPortInput`<sup>Optional</sup> <a name="lbPortInput" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbPortInput"></a>

```typescript
public readonly lbPortInput: number;
```

- *Type:* number

---

##### `lbProtocolInput`<sup>Optional</sup> <a name="lbProtocolInput" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbProtocolInput"></a>

```typescript
public readonly lbProtocolInput: string;
```

- *Type:* string

---

##### `sslCertificateIdInput`<sup>Optional</sup> <a name="sslCertificateIdInput" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.sslCertificateIdInput"></a>

```typescript
public readonly sslCertificateIdInput: string;
```

- *Type:* string

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instancePort"></a>

```typescript
public readonly instancePort: number;
```

- *Type:* number

---

##### `instanceProtocol`<sup>Required</sup> <a name="instanceProtocol" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.instanceProtocol"></a>

```typescript
public readonly instanceProtocol: string;
```

- *Type:* string

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

---

##### `lbProtocol`<sup>Required</sup> <a name="lbProtocol" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.lbProtocol"></a>

```typescript
public readonly lbProtocol: string;
```

- *Type:* string

---

##### `sslCertificateId`<sup>Required</sup> <a name="sslCertificateId" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.sslCertificateId"></a>

```typescript
public readonly sslCertificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elb.ElbListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElbListener | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elb.ElbListener">ElbListener</a> | cdktf.IResolvable

---



