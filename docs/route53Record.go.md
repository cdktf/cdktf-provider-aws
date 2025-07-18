# `route53Record` Submodule <a name="`route53Record` Submodule" id="@cdktf/provider-aws.route53Record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53Record <a name="Route53Record" id="@cdktf/provider-aws.route53Record.Route53Record"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record aws_route53_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53Record(scope Construct, id *string, config Route53RecordConfig) Route53Record
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig">Route53RecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig">Route53RecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putAlias">PutAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy">PutCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy">PutFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy">PutGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy">PutGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy">PutLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy">PutWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite">ResetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy">ResetCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy">ResetFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy">ResetGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeoproximityRoutingPolicy">ResetGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy">ResetLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy">ResetMultivalueAnswerRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetRecords">ResetRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier">ResetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy">ResetWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53Record.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53Record.Route53Record.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53Record.Route53Record.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53Record.Route53Record.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53Record.Route53Record.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53Record.Route53Record.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlias` <a name="PutAlias" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias"></a>

```go
func PutAlias(value Route53RecordAlias)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `PutCidrRoutingPolicy` <a name="PutCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy"></a>

```go
func PutCidrRoutingPolicy(value Route53RecordCidrRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `PutFailoverRoutingPolicy` <a name="PutFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy"></a>

```go
func PutFailoverRoutingPolicy(value Route53RecordFailoverRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `PutGeolocationRoutingPolicy` <a name="PutGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy"></a>

```go
func PutGeolocationRoutingPolicy(value Route53RecordGeolocationRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `PutGeoproximityRoutingPolicy` <a name="PutGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy"></a>

```go
func PutGeoproximityRoutingPolicy(value Route53RecordGeoproximityRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---

##### `PutLatencyRoutingPolicy` <a name="PutLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy"></a>

```go
func PutLatencyRoutingPolicy(value Route53RecordLatencyRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53Record.Route53Record.putTimeouts"></a>

```go
func PutTimeouts(value Route53RecordTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

---

##### `PutWeightedRoutingPolicy` <a name="PutWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy"></a>

```go
func PutWeightedRoutingPolicy(value Route53RecordWeightedRoutingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.route53Record.Route53Record.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAllowOverwrite` <a name="ResetAllowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite"></a>

```go
func ResetAllowOverwrite()
```

##### `ResetCidrRoutingPolicy` <a name="ResetCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy"></a>

```go
func ResetCidrRoutingPolicy()
```

##### `ResetFailoverRoutingPolicy` <a name="ResetFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy"></a>

```go
func ResetFailoverRoutingPolicy()
```

##### `ResetGeolocationRoutingPolicy` <a name="ResetGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy"></a>

```go
func ResetGeolocationRoutingPolicy()
```

##### `ResetGeoproximityRoutingPolicy` <a name="ResetGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeoproximityRoutingPolicy"></a>

```go
func ResetGeoproximityRoutingPolicy()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId"></a>

```go
func ResetHealthCheckId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53Record.Route53Record.resetId"></a>

```go
func ResetId()
```

##### `ResetLatencyRoutingPolicy` <a name="ResetLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy"></a>

```go
func ResetLatencyRoutingPolicy()
```

##### `ResetMultivalueAnswerRoutingPolicy` <a name="ResetMultivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy"></a>

```go
func ResetMultivalueAnswerRoutingPolicy()
```

##### `ResetRecords` <a name="ResetRecords" id="@cdktf/provider-aws.route53Record.Route53Record.resetRecords"></a>

```go
func ResetRecords()
```

##### `ResetSetIdentifier` <a name="ResetSetIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier"></a>

```go
func ResetSetIdentifier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53Record.Route53Record.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.route53Record.Route53Record.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetWeightedRoutingPolicy` <a name="ResetWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy"></a>

```go
func ResetWeightedRoutingPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.Route53Record_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.Route53Record_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.Route53Record_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.Route53Record_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53Record to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.alias">Alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy">CidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy">FailoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy">GeolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicy">GeoproximityRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference">Route53RecordGeoproximityRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy">LatencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference">Route53RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy">WeightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput">AliasInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput">AllowOverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput">CidrRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput">FailoverRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput">GeolocationRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicyInput">GeoproximityRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput">LatencyRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput">MultivalueAnswerRoutingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput">RecordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput">SetIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput">WeightedRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite">AllowOverwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy">MultivalueAnswerRoutingPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.records">Records</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53Record.Route53Record.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53Record.Route53Record.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53Record.Route53Record.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53Record.Route53Record.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53Record.Route53Record.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.route53Record.Route53Record.property.alias"></a>

```go
func Alias() Route53RecordAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a>

---

##### `CidrRoutingPolicy`<sup>Required</sup> <a name="CidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy"></a>

```go
func CidrRoutingPolicy() Route53RecordCidrRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a>

---

##### `FailoverRoutingPolicy`<sup>Required</sup> <a name="FailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy"></a>

```go
func FailoverRoutingPolicy() Route53RecordFailoverRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `GeolocationRoutingPolicy`<sup>Required</sup> <a name="GeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy"></a>

```go
func GeolocationRoutingPolicy() Route53RecordGeolocationRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a>

---

##### `GeoproximityRoutingPolicy`<sup>Required</sup> <a name="GeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicy"></a>

```go
func GeoproximityRoutingPolicy() Route53RecordGeoproximityRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference">Route53RecordGeoproximityRoutingPolicyOutputReference</a>

---

##### `LatencyRoutingPolicy`<sup>Required</sup> <a name="LatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy"></a>

```go
func LatencyRoutingPolicy() Route53RecordLatencyRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53Record.Route53Record.property.timeouts"></a>

```go
func Timeouts() Route53RecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference">Route53RecordTimeoutsOutputReference</a>

---

##### `WeightedRoutingPolicy`<sup>Required</sup> <a name="WeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy"></a>

```go
func WeightedRoutingPolicy() Route53RecordWeightedRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput"></a>

```go
func AliasInput() Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `AllowOverwriteInput`<sup>Optional</sup> <a name="AllowOverwriteInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput"></a>

```go
func AllowOverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `CidrRoutingPolicyInput`<sup>Optional</sup> <a name="CidrRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput"></a>

```go
func CidrRoutingPolicyInput() Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `FailoverRoutingPolicyInput`<sup>Optional</sup> <a name="FailoverRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput"></a>

```go
func FailoverRoutingPolicyInput() Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `GeolocationRoutingPolicyInput`<sup>Optional</sup> <a name="GeolocationRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput"></a>

```go
func GeolocationRoutingPolicyInput() Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `GeoproximityRoutingPolicyInput`<sup>Optional</sup> <a name="GeoproximityRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicyInput"></a>

```go
func GeoproximityRoutingPolicyInput() Route53RecordGeoproximityRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput"></a>

```go
func HealthCheckIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LatencyRoutingPolicyInput`<sup>Optional</sup> <a name="LatencyRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput"></a>

```go
func LatencyRoutingPolicyInput() Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `MultivalueAnswerRoutingPolicyInput`<sup>Optional</sup> <a name="MultivalueAnswerRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput"></a>

```go
func MultivalueAnswerRoutingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecordsInput`<sup>Optional</sup> <a name="RecordsInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput"></a>

```go
func RecordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetIdentifierInput`<sup>Optional</sup> <a name="SetIdentifierInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput"></a>

```go
func SetIdentifierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WeightedRoutingPolicyInput`<sup>Optional</sup> <a name="WeightedRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput"></a>

```go
func WeightedRoutingPolicyInput() Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AllowOverwrite`<sup>Required</sup> <a name="AllowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite"></a>

```go
func AllowOverwrite() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53Record.Route53Record.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultivalueAnswerRoutingPolicy`<sup>Required</sup> <a name="MultivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy"></a>

```go
func MultivalueAnswerRoutingPolicy() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53Record.Route53Record.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-aws.route53Record.Route53Record.property.records"></a>

```go
func Records() *[]*string
```

- *Type:* *[]*string

---

##### `SetIdentifier`<sup>Required</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier"></a>

```go
func SetIdentifier() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53Record.Route53Record.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordAlias <a name="Route53RecordAlias" id="@cdktf/provider-aws.route53Record.Route53RecordAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordAlias {
	EvaluateTargetHealth: interface{},
	Name: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#zone_id Route53Record#zone_id}. |

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth"></a>

```go
EvaluateTargetHealth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#name Route53Record#name}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#zone_id Route53Record#zone_id}.

---

### Route53RecordCidrRoutingPolicy <a name="Route53RecordCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordCidrRoutingPolicy {
	CollectionId: *string,
	LocationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId">CollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#collection_id Route53Record#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName">LocationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#location_name Route53Record#location_name}. |

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#collection_id Route53Record#collection_id}.

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName"></a>

```go
LocationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#location_name Route53Record#location_name}.

---

### Route53RecordConfig <a name="Route53RecordConfig" id="@cdktf/provider-aws.route53Record.Route53RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	ZoneId: *string,
	Alias: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordAlias,
	AllowOverwrite: interface{},
	CidrRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordCidrRoutingPolicy,
	FailoverRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordFailoverRoutingPolicy,
	GeolocationRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordGeolocationRoutingPolicy,
	GeoproximityRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordGeoproximityRoutingPolicy,
	HealthCheckId: *string,
	Id: *string,
	LatencyRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordLatencyRoutingPolicy,
	MultivalueAnswerRoutingPolicy: interface{},
	Records: *[]*string,
	SetIdentifier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordTimeouts,
	Ttl: *f64,
	WeightedRoutingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53Record.Route53RecordWeightedRoutingPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias">Alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite">AllowOverwrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy">CidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy">FailoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy">GeolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geoproximityRoutingPolicy">GeoproximityRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | geoproximity_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy">LatencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy">MultivalueAnswerRoutingPolicy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records">Records</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy">WeightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#name Route53Record#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#type Route53Record#type}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#zone_id Route53Record#zone_id}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias"></a>

```go
Alias Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#alias Route53Record#alias}

---

##### `AllowOverwrite`<sup>Optional</sup> <a name="AllowOverwrite" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite"></a>

```go
AllowOverwrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `CidrRoutingPolicy`<sup>Optional</sup> <a name="CidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy"></a>

```go
CidrRoutingPolicy Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `FailoverRoutingPolicy`<sup>Optional</sup> <a name="FailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy"></a>

```go
FailoverRoutingPolicy Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `GeolocationRoutingPolicy`<sup>Optional</sup> <a name="GeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy"></a>

```go
GeolocationRoutingPolicy Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `GeoproximityRoutingPolicy`<sup>Optional</sup> <a name="GeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geoproximityRoutingPolicy"></a>

```go
GeoproximityRoutingPolicy Route53RecordGeoproximityRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

geoproximity_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#geoproximity_routing_policy Route53Record#geoproximity_routing_policy}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId"></a>

```go
HealthCheckId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LatencyRoutingPolicy`<sup>Optional</sup> <a name="LatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy"></a>

```go
LatencyRoutingPolicy Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `MultivalueAnswerRoutingPolicy`<sup>Optional</sup> <a name="MultivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy"></a>

```go
MultivalueAnswerRoutingPolicy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `Records`<sup>Optional</sup> <a name="Records" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records"></a>

```go
Records *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#records Route53Record#records}.

---

##### `SetIdentifier`<sup>Optional</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier"></a>

```go
SetIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.timeouts"></a>

```go
Timeouts Route53RecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#timeouts Route53Record#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#ttl Route53Record#ttl}.

---

##### `WeightedRoutingPolicy`<sup>Optional</sup> <a name="WeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy"></a>

```go
WeightedRoutingPolicy Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

### Route53RecordFailoverRoutingPolicy <a name="Route53RecordFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordFailoverRoutingPolicy {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#type Route53Record#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#type Route53Record#type}.

---

### Route53RecordGeolocationRoutingPolicy <a name="Route53RecordGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordGeolocationRoutingPolicy {
	Continent: *string,
	Country: *string,
	Subdivision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent">Continent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#continent Route53Record#continent}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#country Route53Record#country}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision">Subdivision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#subdivision Route53Record#subdivision}. |

---

##### `Continent`<sup>Optional</sup> <a name="Continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent"></a>

```go
Continent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#continent Route53Record#continent}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#country Route53Record#country}.

---

##### `Subdivision`<sup>Optional</sup> <a name="Subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision"></a>

```go
Subdivision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#subdivision Route53Record#subdivision}.

---

### Route53RecordGeoproximityRoutingPolicy <a name="Route53RecordGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordGeoproximityRoutingPolicy {
	AwsRegion: *string,
	Bias: *f64,
	Coordinates: interface{},
	LocalZoneGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#aws_region Route53Record#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.bias">Bias</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#bias Route53Record#bias}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.coordinates">Coordinates</a></code> | <code>interface{}</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#aws_region Route53Record#aws_region}.

---

##### `Bias`<sup>Optional</sup> <a name="Bias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.bias"></a>

```go
Bias *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#bias Route53Record#bias}.

---

##### `Coordinates`<sup>Optional</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.coordinates"></a>

```go
Coordinates interface{}
```

- *Type:* interface{}

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#coordinates Route53Record#coordinates}

---

##### `LocalZoneGroup`<sup>Optional</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.localZoneGroup"></a>

```go
LocalZoneGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}.

---

### Route53RecordGeoproximityRoutingPolicyCoordinates <a name="Route53RecordGeoproximityRoutingPolicyCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordGeoproximityRoutingPolicyCoordinates {
	Latitude: *string,
	Longitude: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.latitude">Latitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#latitude Route53Record#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.longitude">Longitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#longitude Route53Record#longitude}. |

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.latitude"></a>

```go
Latitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#latitude Route53Record#latitude}.

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.longitude"></a>

```go
Longitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#longitude Route53Record#longitude}.

---

### Route53RecordLatencyRoutingPolicy <a name="Route53RecordLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordLatencyRoutingPolicy {
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#region Route53Record#region}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#region Route53Record#region}.

---

### Route53RecordTimeouts <a name="Route53RecordTimeouts" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#create Route53Record#create}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#delete Route53Record#delete}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#update Route53Record#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#create Route53Record#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#delete Route53Record#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#update Route53Record#update}.

---

### Route53RecordWeightedRoutingPolicy <a name="Route53RecordWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

&route53record.Route53RecordWeightedRoutingPolicy {
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#weight Route53Record#weight}. |

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_record#weight Route53Record#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordAliasOutputReference <a name="Route53RecordAliasOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordAliasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordAliasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput">EvaluateTargetHealthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealthInput`<sup>Optional</sup> <a name="EvaluateTargetHealthInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput"></a>

```go
func EvaluateTargetHealthInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth"></a>

```go
func EvaluateTargetHealth() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---


### Route53RecordCidrRoutingPolicyOutputReference <a name="Route53RecordCidrRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordCidrRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordCidrRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput">LocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput"></a>

```go
func LocationNameInput() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---


### Route53RecordFailoverRoutingPolicyOutputReference <a name="Route53RecordFailoverRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordFailoverRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordFailoverRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---


### Route53RecordGeolocationRoutingPolicyOutputReference <a name="Route53RecordGeolocationRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordGeolocationRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordGeolocationRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent">ResetContinent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision">ResetSubdivision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinent` <a name="ResetContinent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent"></a>

```go
func ResetContinent()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetSubdivision` <a name="ResetSubdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision"></a>

```go
func ResetSubdivision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput">ContinentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput">SubdivisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent">Continent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision">Subdivision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinentInput`<sup>Optional</sup> <a name="ContinentInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput"></a>

```go
func ContinentInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `SubdivisionInput`<sup>Optional</sup> <a name="SubdivisionInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput"></a>

```go
func SubdivisionInput() *string
```

- *Type:* *string

---

##### `Continent`<sup>Required</sup> <a name="Continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent"></a>

```go
func Continent() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Subdivision`<sup>Required</sup> <a name="Subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision"></a>

```go
func Subdivision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---


### Route53RecordGeoproximityRoutingPolicyCoordinatesList <a name="Route53RecordGeoproximityRoutingPolicyCoordinatesList" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordGeoproximityRoutingPolicyCoordinatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordGeoproximityRoutingPolicyCoordinatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get"></a>

```go
func Get(index *f64) Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference <a name="Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordGeoproximityRoutingPolicyCoordinatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitudeInput">LatitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitudeInput">LongitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitude">Latitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitude">Longitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitudeInput"></a>

```go
func LatitudeInput() *string
```

- *Type:* *string

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitudeInput"></a>

```go
func LongitudeInput() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitude"></a>

```go
func Latitude() *string
```

- *Type:* *string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitude"></a>

```go
func Longitude() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordGeoproximityRoutingPolicyOutputReference <a name="Route53RecordGeoproximityRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordGeoproximityRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordGeoproximityRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates">PutCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetBias">ResetBias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetCoordinates">ResetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetLocalZoneGroup">ResetLocalZoneGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoordinates` <a name="PutCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates"></a>

```go
func PutCoordinates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetBias` <a name="ResetBias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetBias"></a>

```go
func ResetBias()
```

##### `ResetCoordinates` <a name="ResetCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetCoordinates"></a>

```go
func ResetCoordinates()
```

##### `ResetLocalZoneGroup` <a name="ResetLocalZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetLocalZoneGroup"></a>

```go
func ResetLocalZoneGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList">Route53RecordGeoproximityRoutingPolicyCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.biasInput">BiasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroupInput">LocalZoneGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.bias">Bias</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinates"></a>

```go
func Coordinates() Route53RecordGeoproximityRoutingPolicyCoordinatesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList">Route53RecordGeoproximityRoutingPolicyCoordinatesList</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `BiasInput`<sup>Optional</sup> <a name="BiasInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.biasInput"></a>

```go
func BiasInput() *f64
```

- *Type:* *f64

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() interface{}
```

- *Type:* interface{}

---

##### `LocalZoneGroupInput`<sup>Optional</sup> <a name="LocalZoneGroupInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroupInput"></a>

```go
func LocalZoneGroupInput() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Bias`<sup>Required</sup> <a name="Bias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.bias"></a>

```go
func Bias() *f64
```

- *Type:* *f64

---

##### `LocalZoneGroup`<sup>Required</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroup"></a>

```go
func LocalZoneGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordGeoproximityRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---


### Route53RecordLatencyRoutingPolicyOutputReference <a name="Route53RecordLatencyRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordLatencyRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordLatencyRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---


### Route53RecordTimeoutsOutputReference <a name="Route53RecordTimeoutsOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordWeightedRoutingPolicyOutputReference <a name="Route53RecordWeightedRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53record"

route53record.NewRoute53RecordWeightedRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordWeightedRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---



