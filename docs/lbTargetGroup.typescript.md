# `lbTargetGroup` Submodule <a name="`lbTargetGroup` Submodule" id="@cdktf/provider-aws.lbTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTargetGroup <a name="LbTargetGroup" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group aws_lb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroup(scope: Construct, id: string, config?: LbTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover">putTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth">putTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState">putTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination">resetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay">resetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled">resetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType">resetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation">resetLoadBalancingAnomalyMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled">resetLoadBalancingCrossZoneEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp">resetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2">resetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart">resetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness">resetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover">resetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth">resetTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState">resetTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck"></a>

```typescript
public putHealthCheck(value: LbTargetGroupHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness"></a>

```typescript
public putStickiness(value: LbTargetGroupStickiness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `putTargetFailover` <a name="putTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover"></a>

```typescript
public putTargetFailover(value: IResolvable | LbTargetGroupTargetFailover[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]

---

##### `putTargetGroupHealth` <a name="putTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth"></a>

```typescript
public putTargetGroupHealth(value: LbTargetGroupTargetGroupHealth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `putTargetHealthState` <a name="putTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState"></a>

```typescript
public putTargetHealthState(value: IResolvable | LbTargetGroupTargetHealthState[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]

---

##### `resetConnectionTermination` <a name="resetConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination"></a>

```typescript
public resetConnectionTermination(): void
```

##### `resetDeregistrationDelay` <a name="resetDeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay"></a>

```typescript
public resetDeregistrationDelay(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetLambdaMultiValueHeadersEnabled` <a name="resetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```typescript
public resetLambdaMultiValueHeadersEnabled(): void
```

##### `resetLoadBalancingAlgorithmType` <a name="resetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```typescript
public resetLoadBalancingAlgorithmType(): void
```

##### `resetLoadBalancingAnomalyMitigation` <a name="resetLoadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation"></a>

```typescript
public resetLoadBalancingAnomalyMitigation(): void
```

##### `resetLoadBalancingCrossZoneEnabled` <a name="resetLoadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled"></a>

```typescript
public resetLoadBalancingCrossZoneEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreserveClientIp` <a name="resetPreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp"></a>

```typescript
public resetPreserveClientIp(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```

##### `resetProxyProtocolV2` <a name="resetProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2"></a>

```typescript
public resetProxyProtocolV2(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSlowStart` <a name="resetSlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart"></a>

```typescript
public resetSlowStart(): void
```

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness"></a>

```typescript
public resetStickiness(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTargetFailover` <a name="resetTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover"></a>

```typescript
public resetTargetFailover(): void
```

##### `resetTargetGroupHealth` <a name="resetTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth"></a>

```typescript
public resetTargetGroupHealth(): void
```

##### `resetTargetHealthState` <a name="resetTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState"></a>

```typescript
public resetTargetHealthState(): void
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType"></a>

```typescript
public resetTargetType(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

lbTargetGroup.LbTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

lbTargetGroup.LbTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

lbTargetGroup.LbTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

lbTargetGroup.LbTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix">arnSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns">loadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover">targetFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth">targetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState">targetHealthState</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput">connectionTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput">deregistrationDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">lambdaMultiValueHeadersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput">loadBalancingAlgorithmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput">loadBalancingAnomalyMitigationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput">loadBalancingCrossZoneEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput">preserveClientIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input">proxyProtocolV2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput">slowStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput">targetFailoverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput">targetGroupHealthInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput">targetHealthStateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination">connectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay">deregistrationDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp">preserveClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart">slowStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix"></a>

```typescript
public readonly arnSuffix: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck"></a>

```typescript
public readonly healthCheck: LbTargetGroupHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a>

---

##### `loadBalancerArns`<sup>Required</sup> <a name="loadBalancerArns" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns"></a>

```typescript
public readonly loadBalancerArns: string[];
```

- *Type:* string[]

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness"></a>

```typescript
public readonly stickiness: LbTargetGroupStickinessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a>

---

##### `targetFailover`<sup>Required</sup> <a name="targetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover"></a>

```typescript
public readonly targetFailover: LbTargetGroupTargetFailoverList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a>

---

##### `targetGroupHealth`<sup>Required</sup> <a name="targetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth"></a>

```typescript
public readonly targetGroupHealth: LbTargetGroupTargetGroupHealthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a>

---

##### `targetHealthState`<sup>Required</sup> <a name="targetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState"></a>

```typescript
public readonly targetHealthState: LbTargetGroupTargetHealthStateList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a>

---

##### `connectionTerminationInput`<sup>Optional</sup> <a name="connectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput"></a>

```typescript
public readonly connectionTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deregistrationDelayInput`<sup>Optional</sup> <a name="deregistrationDelayInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput"></a>

```typescript
public readonly deregistrationDelayInput: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: LbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `lambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```typescript
public readonly loadBalancingAlgorithmTypeInput: string;
```

- *Type:* string

---

##### `loadBalancingAnomalyMitigationInput`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput"></a>

```typescript
public readonly loadBalancingAnomalyMitigationInput: string;
```

- *Type:* string

---

##### `loadBalancingCrossZoneEnabledInput`<sup>Optional</sup> <a name="loadBalancingCrossZoneEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput"></a>

```typescript
public readonly loadBalancingCrossZoneEnabledInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preserveClientIpInput`<sup>Optional</sup> <a name="preserveClientIpInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput"></a>

```typescript
public readonly preserveClientIpInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `proxyProtocolV2Input`<sup>Optional</sup> <a name="proxyProtocolV2Input" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input"></a>

```typescript
public readonly proxyProtocolV2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `slowStartInput`<sup>Optional</sup> <a name="slowStartInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput"></a>

```typescript
public readonly slowStartInput: number;
```

- *Type:* number

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput"></a>

```typescript
public readonly stickinessInput: LbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetFailoverInput`<sup>Optional</sup> <a name="targetFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput"></a>

```typescript
public readonly targetFailoverInput: IResolvable | LbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]

---

##### `targetGroupHealthInput`<sup>Optional</sup> <a name="targetGroupHealthInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput"></a>

```typescript
public readonly targetGroupHealthInput: LbTargetGroupTargetGroupHealth;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `targetHealthStateInput`<sup>Optional</sup> <a name="targetHealthStateInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput"></a>

```typescript
public readonly targetHealthStateInput: IResolvable | LbTargetGroupTargetHealthState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `connectionTermination`<sup>Required</sup> <a name="connectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination"></a>

```typescript
public readonly connectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deregistrationDelay`<sup>Required</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay"></a>

```typescript
public readonly deregistrationDelay: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `lambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingAlgorithmType`<sup>Required</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType"></a>

```typescript
public readonly loadBalancingAlgorithmType: string;
```

- *Type:* string

---

##### `loadBalancingAnomalyMitigation`<sup>Required</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation"></a>

```typescript
public readonly loadBalancingAnomalyMitigation: string;
```

- *Type:* string

---

##### `loadBalancingCrossZoneEnabled`<sup>Required</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled"></a>

```typescript
public readonly loadBalancingCrossZoneEnabled: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp"></a>

```typescript
public readonly preserveClientIp: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `proxyProtocolV2`<sup>Required</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2"></a>

```typescript
public readonly proxyProtocolV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `slowStart`<sup>Required</sup> <a name="slowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart"></a>

```typescript
public readonly slowStart: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbTargetGroupConfig <a name="LbTargetGroupConfig" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupConfig: lbTargetGroup.LbTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination">connectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay">deregistrationDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp">preserveClientIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart">slowStart</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover">targetFailover</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth">targetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState">targetHealthState</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]</code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination"></a>

```typescript
public readonly connectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay"></a>

```typescript
public readonly deregistrationDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: LbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```typescript
public readonly loadBalancingAlgorithmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.

---

##### `loadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation"></a>

```typescript
public readonly loadBalancingAnomalyMitigation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `loadBalancingCrossZoneEnabled`<sup>Optional</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled"></a>

```typescript
public readonly loadBalancingCrossZoneEnabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp"></a>

```typescript
public readonly preserveClientIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2"></a>

```typescript
public readonly proxyProtocolV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#region LbTargetGroup#region}

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart"></a>

```typescript
public readonly slowStart: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness"></a>

```typescript
public readonly stickiness: LbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#stickiness LbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover"></a>

```typescript
public readonly targetFailover: IResolvable | LbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_failover LbTargetGroup#target_failover}

---

##### `targetGroupHealth`<sup>Optional</sup> <a name="targetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth"></a>

```typescript
public readonly targetGroupHealth: LbTargetGroupTargetGroupHealth;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_group_health LbTargetGroup#target_group_health}

---

##### `targetHealthState`<sup>Optional</sup> <a name="targetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState"></a>

```typescript
public readonly targetHealthState: IResolvable | LbTargetGroupTargetHealthState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_health_state LbTargetGroup#target_health_state}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}.

---

### LbTargetGroupHealthCheck <a name="LbTargetGroupHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupHealthCheck: lbTargetGroup.LbTargetGroupHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher">matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#path LbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#path LbTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}.

---

### LbTargetGroupStickiness <a name="LbTargetGroupStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupStickiness: lbTargetGroup.LbTargetGroupStickiness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#type LbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration">cookieDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#type LbTargetGroup#type}.

---

##### `cookieDuration`<sup>Optional</sup> <a name="cookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration"></a>

```typescript
public readonly cookieDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}.

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

### LbTargetGroupTargetFailover <a name="LbTargetGroupTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupTargetFailover: lbTargetGroup.LbTargetGroupTargetFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration">onDeregistration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy">onUnhealthy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}. |

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration"></a>

```typescript
public readonly onDeregistration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}.

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy"></a>

```typescript
public readonly onUnhealthy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}.

---

### LbTargetGroupTargetGroupHealth <a name="LbTargetGroupTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupTargetGroupHealth: lbTargetGroup.LbTargetGroupTargetGroupHealth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover">dnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | dns_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting">unhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | unhealthy_state_routing block. |

---

##### `dnsFailover`<sup>Optional</sup> <a name="dnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover"></a>

```typescript
public readonly dnsFailover: LbTargetGroupTargetGroupHealthDnsFailover;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

dns_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#dns_failover LbTargetGroup#dns_failover}

---

##### `unhealthyStateRouting`<sup>Optional</sup> <a name="unhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting"></a>

```typescript
public readonly unhealthyStateRouting: LbTargetGroupTargetGroupHealthUnhealthyStateRouting;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

unhealthy_state_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_state_routing LbTargetGroup#unhealthy_state_routing}

---

### LbTargetGroupTargetGroupHealthDnsFailover <a name="LbTargetGroupTargetGroupHealthDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupTargetGroupHealthDnsFailover: lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimumHealthyTargetsCount`<sup>Optional</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount"></a>

```typescript
public readonly minimumHealthyTargetsCount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage"></a>

```typescript
public readonly minimumHealthyTargetsPercentage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetGroupHealthUnhealthyStateRouting <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupTargetGroupHealthUnhealthyStateRouting: lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimumHealthyTargetsCount`<sup>Optional</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount"></a>

```typescript
public readonly minimumHealthyTargetsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage"></a>

```typescript
public readonly minimumHealthyTargetsPercentage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetHealthState <a name="LbTargetGroupTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

const lbTargetGroupTargetHealthState: lbTargetGroup.LbTargetGroupTargetHealthState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination">enableUnhealthyConnectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.unhealthyDrainingInterval">unhealthyDrainingInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_draining_interval LbTargetGroup#unhealthy_draining_interval}. |

---

##### `enableUnhealthyConnectionTermination`<sup>Required</sup> <a name="enableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination"></a>

```typescript
public readonly enableUnhealthyConnectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}.

---

##### `unhealthyDrainingInterval`<sup>Optional</sup> <a name="unhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.unhealthyDrainingInterval"></a>

```typescript
public readonly unhealthyDrainingInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_draining_interval LbTargetGroup#unhealthy_draining_interval}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTargetGroupHealthCheckOutputReference <a name="LbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---


### LbTargetGroupStickinessOutputReference <a name="LbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupStickinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration">resetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieDuration` <a name="resetCookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```typescript
public resetCookieDuration(): void
```

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName"></a>

```typescript
public resetCookieName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput">cookieDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration">cookieDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieDurationInput`<sup>Optional</sup> <a name="cookieDurationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```typescript
public readonly cookieDurationInput: number;
```

- *Type:* number

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cookieDuration`<sup>Required</sup> <a name="cookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```typescript
public readonly cookieDuration: number;
```

- *Type:* number

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---


### LbTargetGroupTargetFailoverList <a name="LbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetFailoverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get"></a>

```typescript
public get(index: number): LbTargetGroupTargetFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>[]

---


### LbTargetGroupTargetFailoverOutputReference <a name="LbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">onDeregistrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">onUnhealthyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration">onDeregistration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">onUnhealthy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDeregistrationInput`<sup>Optional</sup> <a name="onDeregistrationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```typescript
public readonly onDeregistrationInput: string;
```

- *Type:* string

---

##### `onUnhealthyInput`<sup>Optional</sup> <a name="onUnhealthyInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```typescript
public readonly onUnhealthyInput: string;
```

- *Type:* string

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```typescript
public readonly onDeregistration: string;
```

- *Type:* string

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```typescript
public readonly onUnhealthy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbTargetGroupTargetFailover;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>

---


### LbTargetGroupTargetGroupHealthDnsFailoverOutputReference <a name="LbTargetGroupTargetGroupHealthDnsFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount">resetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage">resetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumHealthyTargetsCount` <a name="resetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount"></a>

```typescript
public resetMinimumHealthyTargetsCount(): void
```

##### `resetMinimumHealthyTargetsPercentage` <a name="resetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```typescript
public resetMinimumHealthyTargetsPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput">minimumHealthyTargetsCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput">minimumHealthyTargetsPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="minimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput"></a>

```typescript
public readonly minimumHealthyTargetsCountInput: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```typescript
public readonly minimumHealthyTargetsPercentageInput: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsCount`<sup>Required</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount"></a>

```typescript
public readonly minimumHealthyTargetsCount: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsPercentage`<sup>Required</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage"></a>

```typescript
public readonly minimumHealthyTargetsPercentage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbTargetGroupTargetGroupHealthDnsFailover;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---


### LbTargetGroupTargetGroupHealthOutputReference <a name="LbTargetGroupTargetGroupHealthOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover">putDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting">putUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover">resetDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting">resetUnhealthyStateRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsFailover` <a name="putDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover"></a>

```typescript
public putDnsFailover(value: LbTargetGroupTargetGroupHealthDnsFailover): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `putUnhealthyStateRouting` <a name="putUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting"></a>

```typescript
public putUnhealthyStateRouting(value: LbTargetGroupTargetGroupHealthUnhealthyStateRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `resetDnsFailover` <a name="resetDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover"></a>

```typescript
public resetDnsFailover(): void
```

##### `resetUnhealthyStateRouting` <a name="resetUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting"></a>

```typescript
public resetUnhealthyStateRouting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover">dnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting">unhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput">dnsFailoverInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput">unhealthyStateRoutingInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsFailover`<sup>Required</sup> <a name="dnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover"></a>

```typescript
public readonly dnsFailover: LbTargetGroupTargetGroupHealthDnsFailoverOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a>

---

##### `unhealthyStateRouting`<sup>Required</sup> <a name="unhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting"></a>

```typescript
public readonly unhealthyStateRouting: LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a>

---

##### `dnsFailoverInput`<sup>Optional</sup> <a name="dnsFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput"></a>

```typescript
public readonly dnsFailoverInput: LbTargetGroupTargetGroupHealthDnsFailover;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `unhealthyStateRoutingInput`<sup>Optional</sup> <a name="unhealthyStateRoutingInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput"></a>

```typescript
public readonly unhealthyStateRoutingInput: LbTargetGroupTargetGroupHealthUnhealthyStateRouting;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbTargetGroupTargetGroupHealth;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---


### LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount">resetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage">resetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumHealthyTargetsCount` <a name="resetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount"></a>

```typescript
public resetMinimumHealthyTargetsCount(): void
```

##### `resetMinimumHealthyTargetsPercentage` <a name="resetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```typescript
public resetMinimumHealthyTargetsPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput">minimumHealthyTargetsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput">minimumHealthyTargetsPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="minimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput"></a>

```typescript
public readonly minimumHealthyTargetsCountInput: number;
```

- *Type:* number

---

##### `minimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```typescript
public readonly minimumHealthyTargetsPercentageInput: string;
```

- *Type:* string

---

##### `minimumHealthyTargetsCount`<sup>Required</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount"></a>

```typescript
public readonly minimumHealthyTargetsCount: number;
```

- *Type:* number

---

##### `minimumHealthyTargetsPercentage`<sup>Required</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage"></a>

```typescript
public readonly minimumHealthyTargetsPercentage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbTargetGroupTargetGroupHealthUnhealthyStateRouting;
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---


### LbTargetGroupTargetHealthStateList <a name="LbTargetGroupTargetHealthStateList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetHealthStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get"></a>

```typescript
public get(index: number): LbTargetGroupTargetHealthStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbTargetGroupTargetHealthState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>[]

---


### LbTargetGroupTargetHealthStateOutputReference <a name="LbTargetGroupTargetHealthStateOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer"></a>

```typescript
import { lbTargetGroup } from '@cdktf/provider-aws'

new lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval">resetUnhealthyDrainingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnhealthyDrainingInterval` <a name="resetUnhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval"></a>

```typescript
public resetUnhealthyDrainingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput">enableUnhealthyConnectionTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput">unhealthyDrainingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination">enableUnhealthyConnectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval">unhealthyDrainingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableUnhealthyConnectionTerminationInput`<sup>Optional</sup> <a name="enableUnhealthyConnectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput"></a>

```typescript
public readonly enableUnhealthyConnectionTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unhealthyDrainingIntervalInput`<sup>Optional</sup> <a name="unhealthyDrainingIntervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput"></a>

```typescript
public readonly unhealthyDrainingIntervalInput: number;
```

- *Type:* number

---

##### `enableUnhealthyConnectionTermination`<sup>Required</sup> <a name="enableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination"></a>

```typescript
public readonly enableUnhealthyConnectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unhealthyDrainingInterval`<sup>Required</sup> <a name="unhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval"></a>

```typescript
public readonly unhealthyDrainingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbTargetGroupTargetHealthState;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>

---



