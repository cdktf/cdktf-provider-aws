# `alb` Submodule <a name="`alb` Submodule" id="@cdktf/provider-aws.alb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alb <a name="Alb" id="@cdktf/provider-aws.alb.Alb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb aws_alb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.Alb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlb(scope Construct, id *string, config AlbConfig) Alb
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConfig">AlbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConfig">AlbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putAccessLogs">PutAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putConnectionLogs">PutConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putIpamPools">PutIpamPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity">PutMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putSubnetMapping">PutSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetAccessLogs">ResetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetClientKeepAlive">ResetClientKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetConnectionLogs">ResetConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool">ResetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode">ResetDesyncMitigationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy">ResetDnsRecordClientRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields">ResetDropInvalidHeaderFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing">ResetEnableCrossZoneLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection">ResetEnableDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableHttp2">ResetEnableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders">ResetEnableTlsVersionAndCipherSuiteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen">ResetEnableWafFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort">ResetEnableXffClientPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableZonalShift">ResetEnableZonalShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetInternal">ResetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpamPools">ResetIpamPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetLoadBalancerType">ResetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetMinimumLoadBalancerCapacity">ResetMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader">ResetPreserveHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnetMapping">ResetSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode">ResetXffHeaderProcessingMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.Alb.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.alb.Alb.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.alb.Alb.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.alb.Alb.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.alb.Alb.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.alb.Alb.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.alb.Alb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.alb.Alb.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.alb.Alb.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.alb.Alb.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.alb.Alb.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.alb.Alb.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogs` <a name="PutAccessLogs" id="@cdktf/provider-aws.alb.Alb.putAccessLogs"></a>

```go
func PutAccessLogs(value AlbAccessLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `PutConnectionLogs` <a name="PutConnectionLogs" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs"></a>

```go
func PutConnectionLogs(value AlbConnectionLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---

##### `PutIpamPools` <a name="PutIpamPools" id="@cdktf/provider-aws.alb.Alb.putIpamPools"></a>

```go
func PutIpamPools(value AlbIpamPools)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putIpamPools.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

---

##### `PutMinimumLoadBalancerCapacity` <a name="PutMinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity"></a>

```go
func PutMinimumLoadBalancerCapacity(value AlbMinimumLoadBalancerCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

---

##### `PutSubnetMapping` <a name="PutSubnetMapping" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping"></a>

```go
func PutSubnetMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.alb.Alb.putTimeouts"></a>

```go
func PutTimeouts(value AlbTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

---

##### `ResetAccessLogs` <a name="ResetAccessLogs" id="@cdktf/provider-aws.alb.Alb.resetAccessLogs"></a>

```go
func ResetAccessLogs()
```

##### `ResetClientKeepAlive` <a name="ResetClientKeepAlive" id="@cdktf/provider-aws.alb.Alb.resetClientKeepAlive"></a>

```go
func ResetClientKeepAlive()
```

##### `ResetConnectionLogs` <a name="ResetConnectionLogs" id="@cdktf/provider-aws.alb.Alb.resetConnectionLogs"></a>

```go
func ResetConnectionLogs()
```

##### `ResetCustomerOwnedIpv4Pool` <a name="ResetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool"></a>

```go
func ResetCustomerOwnedIpv4Pool()
```

##### `ResetDesyncMitigationMode` <a name="ResetDesyncMitigationMode" id="@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode"></a>

```go
func ResetDesyncMitigationMode()
```

##### `ResetDnsRecordClientRoutingPolicy` <a name="ResetDnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy"></a>

```go
func ResetDnsRecordClientRoutingPolicy()
```

##### `ResetDropInvalidHeaderFields` <a name="ResetDropInvalidHeaderFields" id="@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields"></a>

```go
func ResetDropInvalidHeaderFields()
```

##### `ResetEnableCrossZoneLoadBalancing` <a name="ResetEnableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing"></a>

```go
func ResetEnableCrossZoneLoadBalancing()
```

##### `ResetEnableDeletionProtection` <a name="ResetEnableDeletionProtection" id="@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection"></a>

```go
func ResetEnableDeletionProtection()
```

##### `ResetEnableHttp2` <a name="ResetEnableHttp2" id="@cdktf/provider-aws.alb.Alb.resetEnableHttp2"></a>

```go
func ResetEnableHttp2()
```

##### `ResetEnableTlsVersionAndCipherSuiteHeaders` <a name="ResetEnableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders"></a>

```go
func ResetEnableTlsVersionAndCipherSuiteHeaders()
```

##### `ResetEnableWafFailOpen` <a name="ResetEnableWafFailOpen" id="@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen"></a>

```go
func ResetEnableWafFailOpen()
```

##### `ResetEnableXffClientPort` <a name="ResetEnableXffClientPort" id="@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort"></a>

```go
func ResetEnableXffClientPort()
```

##### `ResetEnableZonalShift` <a name="ResetEnableZonalShift" id="@cdktf/provider-aws.alb.Alb.resetEnableZonalShift"></a>

```go
func ResetEnableZonalShift()
```

##### `ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic` <a name="ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```go
func ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.alb.Alb.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-aws.alb.Alb.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```

##### `ResetInternal` <a name="ResetInternal" id="@cdktf/provider-aws.alb.Alb.resetInternal"></a>

```go
func ResetInternal()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.alb.Alb.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetIpamPools` <a name="ResetIpamPools" id="@cdktf/provider-aws.alb.Alb.resetIpamPools"></a>

```go
func ResetIpamPools()
```

##### `ResetLoadBalancerType` <a name="ResetLoadBalancerType" id="@cdktf/provider-aws.alb.Alb.resetLoadBalancerType"></a>

```go
func ResetLoadBalancerType()
```

##### `ResetMinimumLoadBalancerCapacity` <a name="ResetMinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.Alb.resetMinimumLoadBalancerCapacity"></a>

```go
func ResetMinimumLoadBalancerCapacity()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.alb.Alb.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.alb.Alb.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPreserveHostHeader` <a name="ResetPreserveHostHeader" id="@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader"></a>

```go
func ResetPreserveHostHeader()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.alb.Alb.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.alb.Alb.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSubnetMapping` <a name="ResetSubnetMapping" id="@cdktf/provider-aws.alb.Alb.resetSubnetMapping"></a>

```go
func ResetSubnetMapping()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-aws.alb.Alb.resetSubnets"></a>

```go
func ResetSubnets()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.alb.Alb.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.alb.Alb.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.alb.Alb.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetXffHeaderProcessingMode` <a name="ResetXffHeaderProcessingMode" id="@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode"></a>

```go
func ResetXffHeaderProcessingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.alb.Alb.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.Alb_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.alb.Alb.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.Alb_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.alb.Alb.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.Alb_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.Alb_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Alb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Alb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Alb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogs">AccessLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arnSuffix">ArnSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogs">ConnectionLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipamPools">IpamPools</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference">AlbIpamPoolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacity">MinimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference">AlbMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogsInput">AccessLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput">ClientKeepAliveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogsInput">ConnectionLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput">CustomerOwnedIpv4PoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput">DesyncMitigationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput">DnsRecordClientRoutingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput">DropInvalidHeaderFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput">EnableCrossZoneLoadBalancingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput">EnableDeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2Input">EnableHttp2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput">EnableTlsVersionAndCipherSuiteHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput">EnableWafFailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput">EnableXffClientPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput">EnableZonalShiftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internalInput">InternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipamPoolsInput">IpamPoolsInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacityInput">MinimumLoadBalancerCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput">PreserveHostHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMappingInput">SubnetMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput">XffHeaderProcessingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAlive">ClientKeepAlive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode">DesyncMitigationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy">DnsRecordClientRoutingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields">DropInvalidHeaderFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing">EnableCrossZoneLoadBalancing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection">EnableDeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2">EnableHttp2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders">EnableTlsVersionAndCipherSuiteHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen">EnableWafFailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPort">EnableXffClientPort</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShift">EnableZonalShift</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internal">Internal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerType">LoadBalancerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeader">PreserveHostHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode">XffHeaderProcessingMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.alb.Alb.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.alb.Alb.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.Alb.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.alb.Alb.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.alb.Alb.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.alb.Alb.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.alb.Alb.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.alb.Alb.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.alb.Alb.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.alb.Alb.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.alb.Alb.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLogs`<sup>Required</sup> <a name="AccessLogs" id="@cdktf/provider-aws.alb.Alb.property.accessLogs"></a>

```go
func AccessLogs() AlbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.alb.Alb.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArnSuffix`<sup>Required</sup> <a name="ArnSuffix" id="@cdktf/provider-aws.alb.Alb.property.arnSuffix"></a>

```go
func ArnSuffix() *string
```

- *Type:* *string

---

##### `ConnectionLogs`<sup>Required</sup> <a name="ConnectionLogs" id="@cdktf/provider-aws.alb.Alb.property.connectionLogs"></a>

```go
func ConnectionLogs() AlbConnectionLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.alb.Alb.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpamPools`<sup>Required</sup> <a name="IpamPools" id="@cdktf/provider-aws.alb.Alb.property.ipamPools"></a>

```go
func IpamPools() AlbIpamPoolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference">AlbIpamPoolsOutputReference</a>

---

##### `MinimumLoadBalancerCapacity`<sup>Required</sup> <a name="MinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacity"></a>

```go
func MinimumLoadBalancerCapacity() AlbMinimumLoadBalancerCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference">AlbMinimumLoadBalancerCapacityOutputReference</a>

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktf/provider-aws.alb.Alb.property.subnetMapping"></a>

```go
func SubnetMapping() AlbSubnetMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.alb.Alb.property.timeouts"></a>

```go
func Timeouts() AlbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.alb.Alb.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.alb.Alb.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `AccessLogsInput`<sup>Optional</sup> <a name="AccessLogsInput" id="@cdktf/provider-aws.alb.Alb.property.accessLogsInput"></a>

```go
func AccessLogsInput() AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `ClientKeepAliveInput`<sup>Optional</sup> <a name="ClientKeepAliveInput" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput"></a>

```go
func ClientKeepAliveInput() *f64
```

- *Type:* *f64

---

##### `ConnectionLogsInput`<sup>Optional</sup> <a name="ConnectionLogsInput" id="@cdktf/provider-aws.alb.Alb.property.connectionLogsInput"></a>

```go
func ConnectionLogsInput() AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---

##### `CustomerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="CustomerOwnedIpv4PoolInput" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput"></a>

```go
func CustomerOwnedIpv4PoolInput() *string
```

- *Type:* *string

---

##### `DesyncMitigationModeInput`<sup>Optional</sup> <a name="DesyncMitigationModeInput" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput"></a>

```go
func DesyncMitigationModeInput() *string
```

- *Type:* *string

---

##### `DnsRecordClientRoutingPolicyInput`<sup>Optional</sup> <a name="DnsRecordClientRoutingPolicyInput" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput"></a>

```go
func DnsRecordClientRoutingPolicyInput() *string
```

- *Type:* *string

---

##### `DropInvalidHeaderFieldsInput`<sup>Optional</sup> <a name="DropInvalidHeaderFieldsInput" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput"></a>

```go
func DropInvalidHeaderFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCrossZoneLoadBalancingInput`<sup>Optional</sup> <a name="EnableCrossZoneLoadBalancingInput" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput"></a>

```go
func EnableCrossZoneLoadBalancingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDeletionProtectionInput`<sup>Optional</sup> <a name="EnableDeletionProtectionInput" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput"></a>

```go
func EnableDeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHttp2Input`<sup>Optional</sup> <a name="EnableHttp2Input" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2Input"></a>

```go
func EnableHttp2Input() interface{}
```

- *Type:* interface{}

---

##### `EnableTlsVersionAndCipherSuiteHeadersInput`<sup>Optional</sup> <a name="EnableTlsVersionAndCipherSuiteHeadersInput" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput"></a>

```go
func EnableTlsVersionAndCipherSuiteHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `EnableWafFailOpenInput`<sup>Optional</sup> <a name="EnableWafFailOpenInput" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput"></a>

```go
func EnableWafFailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `EnableXffClientPortInput`<sup>Optional</sup> <a name="EnableXffClientPortInput" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput"></a>

```go
func EnableXffClientPortInput() interface{}
```

- *Type:* interface{}

---

##### `EnableZonalShiftInput`<sup>Optional</sup> <a name="EnableZonalShiftInput" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput"></a>

```go
func EnableZonalShiftInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput`<sup>Optional</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```go
func EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.alb.Alb.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InternalInput`<sup>Optional</sup> <a name="InternalInput" id="@cdktf/provider-aws.alb.Alb.property.internalInput"></a>

```go
func InternalInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `IpamPoolsInput`<sup>Optional</sup> <a name="IpamPoolsInput" id="@cdktf/provider-aws.alb.Alb.property.ipamPoolsInput"></a>

```go
func IpamPoolsInput() AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput"></a>

```go
func LoadBalancerTypeInput() *string
```

- *Type:* *string

---

##### `MinimumLoadBalancerCapacityInput`<sup>Optional</sup> <a name="MinimumLoadBalancerCapacityInput" id="@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacityInput"></a>

```go
func MinimumLoadBalancerCapacityInput() AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.alb.Alb.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.alb.Alb.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PreserveHostHeaderInput`<sup>Optional</sup> <a name="PreserveHostHeaderInput" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput"></a>

```go
func PreserveHostHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.alb.Alb.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.alb.Alb.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetMappingInput`<sup>Optional</sup> <a name="SubnetMappingInput" id="@cdktf/provider-aws.alb.Alb.property.subnetMappingInput"></a>

```go
func SubnetMappingInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.alb.Alb.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.alb.Alb.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.alb.Alb.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.alb.Alb.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `XffHeaderProcessingModeInput`<sup>Optional</sup> <a name="XffHeaderProcessingModeInput" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput"></a>

```go
func XffHeaderProcessingModeInput() *string
```

- *Type:* *string

---

##### `ClientKeepAlive`<sup>Required</sup> <a name="ClientKeepAlive" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAlive"></a>

```go
func ClientKeepAlive() *f64
```

- *Type:* *f64

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool"></a>

```go
func CustomerOwnedIpv4Pool() *string
```

- *Type:* *string

---

##### `DesyncMitigationMode`<sup>Required</sup> <a name="DesyncMitigationMode" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode"></a>

```go
func DesyncMitigationMode() *string
```

- *Type:* *string

---

##### `DnsRecordClientRoutingPolicy`<sup>Required</sup> <a name="DnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy"></a>

```go
func DnsRecordClientRoutingPolicy() *string
```

- *Type:* *string

---

##### `DropInvalidHeaderFields`<sup>Required</sup> <a name="DropInvalidHeaderFields" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields"></a>

```go
func DropInvalidHeaderFields() interface{}
```

- *Type:* interface{}

---

##### `EnableCrossZoneLoadBalancing`<sup>Required</sup> <a name="EnableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing"></a>

```go
func EnableCrossZoneLoadBalancing() interface{}
```

- *Type:* interface{}

---

##### `EnableDeletionProtection`<sup>Required</sup> <a name="EnableDeletionProtection" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection"></a>

```go
func EnableDeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `EnableHttp2`<sup>Required</sup> <a name="EnableHttp2" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2"></a>

```go
func EnableHttp2() interface{}
```

- *Type:* interface{}

---

##### `EnableTlsVersionAndCipherSuiteHeaders`<sup>Required</sup> <a name="EnableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```go
func EnableTlsVersionAndCipherSuiteHeaders() interface{}
```

- *Type:* interface{}

---

##### `EnableWafFailOpen`<sup>Required</sup> <a name="EnableWafFailOpen" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen"></a>

```go
func EnableWafFailOpen() interface{}
```

- *Type:* interface{}

---

##### `EnableXffClientPort`<sup>Required</sup> <a name="EnableXffClientPort" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPort"></a>

```go
func EnableXffClientPort() interface{}
```

- *Type:* interface{}

---

##### `EnableZonalShift`<sup>Required</sup> <a name="EnableZonalShift" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShift"></a>

```go
func EnableZonalShift() interface{}
```

- *Type:* interface{}

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Required</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```go
func EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.alb.Alb.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-aws.alb.Alb.property.idleTimeout"></a>

```go
func IdleTimeout() *f64
```

- *Type:* *f64

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-aws.alb.Alb.property.internal"></a>

```go
func Internal() interface{}
```

- *Type:* interface{}

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.alb.Alb.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerType"></a>

```go
func LoadBalancerType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.alb.Alb.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.alb.Alb.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `PreserveHostHeader`<sup>Required</sup> <a name="PreserveHostHeader" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeader"></a>

```go
func PreserveHostHeader() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.alb.Alb.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.alb.Alb.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.alb.Alb.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.alb.Alb.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.alb.Alb.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `XffHeaderProcessingMode`<sup>Required</sup> <a name="XffHeaderProcessingMode" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode"></a>

```go
func XffHeaderProcessingMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.alb.Alb.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbAccessLogs <a name="AlbAccessLogs" id="@cdktf/provider-aws.alb.AlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbAccessLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbAccessLogs {
	Bucket: *string,
	Enabled: interface{},
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbConfig <a name="AlbConfig" id="@cdktf/provider-aws.alb.AlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessLogs: github.com/cdktf/cdktf-provider-aws-go/aws/v21.alb.AlbAccessLogs,
	ClientKeepAlive: *f64,
	ConnectionLogs: github.com/cdktf/cdktf-provider-aws-go/aws/v21.alb.AlbConnectionLogs,
	CustomerOwnedIpv4Pool: *string,
	DesyncMitigationMode: *string,
	DnsRecordClientRoutingPolicy: *string,
	DropInvalidHeaderFields: interface{},
	EnableCrossZoneLoadBalancing: interface{},
	EnableDeletionProtection: interface{},
	EnableHttp2: interface{},
	EnableTlsVersionAndCipherSuiteHeaders: interface{},
	EnableWafFailOpen: interface{},
	EnableXffClientPort: interface{},
	EnableZonalShift: interface{},
	EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: *string,
	Id: *string,
	IdleTimeout: *f64,
	Internal: interface{},
	IpAddressType: *string,
	IpamPools: github.com/cdktf/cdktf-provider-aws-go/aws/v21.alb.AlbIpamPools,
	LoadBalancerType: *string,
	MinimumLoadBalancerCapacity: github.com/cdktf/cdktf-provider-aws-go/aws/v21.alb.AlbMinimumLoadBalancerCapacity,
	Name: *string,
	NamePrefix: *string,
	PreserveHostHeader: interface{},
	Region: *string,
	SecurityGroups: *[]*string,
	SubnetMapping: interface{},
	Subnets: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.alb.AlbTimeouts,
	XffHeaderProcessingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.accessLogs">AccessLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive">ClientKeepAlive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs">ConnectionLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | connection_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode">DesyncMitigationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy">DnsRecordClientRoutingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields">DropInvalidHeaderFields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing">EnableCrossZoneLoadBalancing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection">EnableDeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2">EnableHttp2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders">EnableTlsVersionAndCipherSuiteHeaders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen">EnableWafFailOpen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort">EnableXffClientPort</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift">EnableZonalShift</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.internal">Internal</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipamPools">IpamPools</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | ipam_pools block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType">LoadBalancerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.minimumLoadBalancerCapacity">MinimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | minimum_load_balancer_capacity block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader">PreserveHostHeader</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping">SubnetMapping</a></code> | <code>interface{}</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode">XffHeaderProcessingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.alb.AlbConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.alb.AlbConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.alb.AlbConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.alb.AlbConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.alb.AlbConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.alb.AlbConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.alb.AlbConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLogs`<sup>Optional</sup> <a name="AccessLogs" id="@cdktf/provider-aws.alb.AlbConfig.property.accessLogs"></a>

```go
AccessLogs AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#access_logs Alb#access_logs}

---

##### `ClientKeepAlive`<sup>Optional</sup> <a name="ClientKeepAlive" id="@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive"></a>

```go
ClientKeepAlive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}.

---

##### `ConnectionLogs`<sup>Optional</sup> <a name="ConnectionLogs" id="@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs"></a>

```go
ConnectionLogs AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

connection_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#connection_logs Alb#connection_logs}

---

##### `CustomerOwnedIpv4Pool`<sup>Optional</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool"></a>

```go
CustomerOwnedIpv4Pool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `DesyncMitigationMode`<sup>Optional</sup> <a name="DesyncMitigationMode" id="@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode"></a>

```go
DesyncMitigationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `DnsRecordClientRoutingPolicy`<sup>Optional</sup> <a name="DnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy"></a>

```go
DnsRecordClientRoutingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}.

---

##### `DropInvalidHeaderFields`<sup>Optional</sup> <a name="DropInvalidHeaderFields" id="@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields"></a>

```go
DropInvalidHeaderFields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `EnableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="EnableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing"></a>

```go
EnableCrossZoneLoadBalancing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `EnableDeletionProtection`<sup>Optional</sup> <a name="EnableDeletionProtection" id="@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection"></a>

```go
EnableDeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `EnableHttp2`<sup>Optional</sup> <a name="EnableHttp2" id="@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2"></a>

```go
EnableHttp2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `EnableTlsVersionAndCipherSuiteHeaders`<sup>Optional</sup> <a name="EnableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```go
EnableTlsVersionAndCipherSuiteHeaders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}.

---

##### `EnableWafFailOpen`<sup>Optional</sup> <a name="EnableWafFailOpen" id="@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen"></a>

```go
EnableWafFailOpen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `EnableXffClientPort`<sup>Optional</sup> <a name="EnableXffClientPort" id="@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort"></a>

```go
EnableXffClientPort interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}.

---

##### `EnableZonalShift`<sup>Optional</sup> <a name="EnableZonalShift" id="@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift"></a>

```go
EnableZonalShift interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}.

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```go
EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.alb.AlbConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout"></a>

```go
IdleTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `Internal`<sup>Optional</sup> <a name="Internal" id="@cdktf/provider-aws.alb.AlbConfig.property.internal"></a>

```go
Internal interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#internal Alb#internal}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `IpamPools`<sup>Optional</sup> <a name="IpamPools" id="@cdktf/provider-aws.alb.AlbConfig.property.ipamPools"></a>

```go
IpamPools AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

ipam_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ipam_pools Alb#ipam_pools}

---

##### `LoadBalancerType`<sup>Optional</sup> <a name="LoadBalancerType" id="@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType"></a>

```go
LoadBalancerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `MinimumLoadBalancerCapacity`<sup>Optional</sup> <a name="MinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.AlbConfig.property.minimumLoadBalancerCapacity"></a>

```go
MinimumLoadBalancerCapacity AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

minimum_load_balancer_capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#minimum_load_balancer_capacity Alb#minimum_load_balancer_capacity}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.alb.AlbConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#name Alb#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.alb.AlbConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `PreserveHostHeader`<sup>Optional</sup> <a name="PreserveHostHeader" id="@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader"></a>

```go
PreserveHostHeader interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.alb.AlbConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#region Alb#region}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.alb.AlbConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `SubnetMapping`<sup>Optional</sup> <a name="SubnetMapping" id="@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping"></a>

```go
SubnetMapping interface{}
```

- *Type:* interface{}

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-aws.alb.AlbConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#subnets Alb#subnets}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.alb.AlbConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#tags Alb#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.alb.AlbConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.alb.AlbConfig.property.timeouts"></a>

```go
Timeouts AlbTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#timeouts Alb#timeouts}

---

##### `XffHeaderProcessingMode`<sup>Optional</sup> <a name="XffHeaderProcessingMode" id="@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode"></a>

```go
XffHeaderProcessingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}.

---

### AlbConnectionLogs <a name="AlbConnectionLogs" id="@cdktf/provider-aws.alb.AlbConnectionLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConnectionLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbConnectionLogs {
	Bucket: *string,
	Enabled: interface{},
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbIpamPools <a name="AlbIpamPools" id="@cdktf/provider-aws.alb.AlbIpamPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbIpamPools.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbIpamPools {
	Ipv4IpamPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ipv4_ipam_pool_id Alb#ipv4_ipam_pool_id}. |

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.alb.AlbIpamPools.property.ipv4IpamPoolId"></a>

```go
Ipv4IpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ipv4_ipam_pool_id Alb#ipv4_ipam_pool_id}.

---

### AlbMinimumLoadBalancerCapacity <a name="AlbMinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbMinimumLoadBalancerCapacity {
	CapacityUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.property.capacityUnits">CapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#capacity_units Alb#capacity_units}. |

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.property.capacityUnits"></a>

```go
CapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#capacity_units Alb#capacity_units}.

---

### AlbSubnetMapping <a name="AlbSubnetMapping" id="@cdktf/provider-aws.alb.AlbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbSubnetMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbSubnetMapping {
	SubnetId: *string,
	AllocationId: *string,
	Ipv6Address: *string,
	PrivateIpv4Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#subnet_id Alb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId">AllocationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#allocation_id Alb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ipv6_address Alb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address">PrivateIpv4Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#subnet_id Alb#subnet_id}.

---

##### `AllocationId`<sup>Optional</sup> <a name="AllocationId" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId"></a>

```go
AllocationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#allocation_id Alb#allocation_id}.

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#ipv6_address Alb#ipv6_address}.

---

##### `PrivateIpv4Address`<sup>Optional</sup> <a name="PrivateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address"></a>

```go
PrivateIpv4Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}.

---

### AlbTimeouts <a name="AlbTimeouts" id="@cdktf/provider-aws.alb.AlbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

&alb.AlbTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#create Alb#create}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#delete Alb#delete}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#update Alb#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.alb.AlbTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#create Alb#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.alb.AlbTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#delete Alb#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.alb.AlbTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb#update Alb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbAccessLogsOutputReference <a name="AlbAccessLogsOutputReference" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbAccessLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbAccessLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---


### AlbConnectionLogsOutputReference <a name="AlbConnectionLogsOutputReference" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbConnectionLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbConnectionLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---


### AlbIpamPoolsOutputReference <a name="AlbIpamPoolsOutputReference" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbIpamPoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbIpamPoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolIdInput"></a>

```go
func Ipv4IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolId"></a>

```go
func Ipv4IpamPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

---


### AlbMinimumLoadBalancerCapacityOutputReference <a name="AlbMinimumLoadBalancerCapacityOutputReference" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbMinimumLoadBalancerCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbMinimumLoadBalancerCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput">CapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">CapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityUnitsInput`<sup>Optional</sup> <a name="CapacityUnitsInput" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput"></a>

```go
func CapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```go
func CapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

---


### AlbSubnetMappingList <a name="AlbSubnetMappingList" id="@cdktf/provider-aws.alb.AlbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbSubnetMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbSubnetMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get"></a>

```go
func Get(index *f64) AlbSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbSubnetMappingOutputReference <a name="AlbSubnetMappingOutputReference" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbSubnetMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbSubnetMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId">ResetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address">ResetPrivateIpv4Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationId` <a name="ResetAllocationId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId"></a>

```go
func ResetAllocationId()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetPrivateIpv4Address` <a name="ResetPrivateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```go
func ResetPrivateIpv4Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId">OutpostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput">AllocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput">PrivateIpv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId">AllocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address">PrivateIpv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutpostId`<sup>Required</sup> <a name="OutpostId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId"></a>

```go
func OutpostId() *string
```

- *Type:* *string

---

##### `AllocationIdInput`<sup>Optional</sup> <a name="AllocationIdInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput"></a>

```go
func AllocationIdInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `PrivateIpv4AddressInput`<sup>Optional</sup> <a name="PrivateIpv4AddressInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```go
func PrivateIpv4AddressInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AllocationId`<sup>Required</sup> <a name="AllocationId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId"></a>

```go
func AllocationId() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `PrivateIpv4Address`<sup>Required</sup> <a name="PrivateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```go
func PrivateIpv4Address() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbTimeoutsOutputReference <a name="AlbTimeoutsOutputReference" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/alb"

alb.NewAlbTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



