# `pinpointsmsvoicev2PhoneNumber` Submodule <a name="`pinpointsmsvoicev2PhoneNumber` Submodule" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2PhoneNumber <a name="Pinpointsmsvoicev2PhoneNumber" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.NewPinpointsmsvoicev2PhoneNumber(scope Construct, id *string, config Pinpointsmsvoicev2PhoneNumberConfig) Pinpointsmsvoicev2PhoneNumber
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig">Pinpointsmsvoicev2PhoneNumberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig">Pinpointsmsvoicev2PhoneNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId">ResetRegistrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn">ResetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled">ResetTwoWayChannelEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts"></a>

```go
func PutTimeouts(value Pinpointsmsvoicev2PhoneNumberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName"></a>

```go
func ResetOptOutListName()
```

##### `ResetRegistrationId` <a name="ResetRegistrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId"></a>

```go
func ResetRegistrationId()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```go
func ResetSelfManagedOptOutsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTwoWayChannelArn` <a name="ResetTwoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn"></a>

```go
func ResetTwoWayChannelArn()
```

##### `ResetTwoWayChannelEnabled` <a name="ResetTwoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled"></a>

```go
func ResetTwoWayChannelEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumber_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumber_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumber_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumber_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Pinpointsmsvoicev2PhoneNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Pinpointsmsvoicev2PhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2PhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice">MonthlyLeasingPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput">IsoCountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput">MessageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput">NumberCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput">NumberTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput">RegistrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput">TwoWayChannelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput">TwoWayChannelEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode">IsoCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities">NumberCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType">NumberType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId">RegistrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled">TwoWayChannelEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonthlyLeasingPrice`<sup>Required</sup> <a name="MonthlyLeasingPrice" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice"></a>

```go
func MonthlyLeasingPrice() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts"></a>

```go
func Timeouts() Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsoCountryCodeInput`<sup>Optional</sup> <a name="IsoCountryCodeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput"></a>

```go
func IsoCountryCodeInput() *string
```

- *Type:* *string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput"></a>

```go
func MessageTypeInput() *string
```

- *Type:* *string

---

##### `NumberCapabilitiesInput`<sup>Optional</sup> <a name="NumberCapabilitiesInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput"></a>

```go
func NumberCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NumberTypeInput`<sup>Optional</sup> <a name="NumberTypeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput"></a>

```go
func NumberTypeInput() *string
```

- *Type:* *string

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput"></a>

```go
func OptOutListNameInput() *string
```

- *Type:* *string

---

##### `RegistrationIdInput`<sup>Optional</sup> <a name="RegistrationIdInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput"></a>

```go
func RegistrationIdInput() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```go
func SelfManagedOptOutsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TwoWayChannelArnInput`<sup>Optional</sup> <a name="TwoWayChannelArnInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput"></a>

```go
func TwoWayChannelArnInput() *string
```

- *Type:* *string

---

##### `TwoWayChannelEnabledInput`<sup>Optional</sup> <a name="TwoWayChannelEnabledInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput"></a>

```go
func TwoWayChannelEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode"></a>

```go
func IsoCountryCode() *string
```

- *Type:* *string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `NumberCapabilities`<sup>Required</sup> <a name="NumberCapabilities" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities"></a>

```go
func NumberCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `NumberType`<sup>Required</sup> <a name="NumberType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType"></a>

```go
func NumberType() *string
```

- *Type:* *string

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName"></a>

```go
func OptOutListName() *string
```

- *Type:* *string

---

##### `RegistrationId`<sup>Required</sup> <a name="RegistrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId"></a>

```go
func RegistrationId() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled"></a>

```go
func SelfManagedOptOutsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn"></a>

```go
func TwoWayChannelArn() *string
```

- *Type:* *string

---

##### `TwoWayChannelEnabled`<sup>Required</sup> <a name="TwoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled"></a>

```go
func TwoWayChannelEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PhoneNumberConfig <a name="Pinpointsmsvoicev2PhoneNumberConfig" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

&pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IsoCountryCode: *string,
	MessageType: *string,
	NumberCapabilities: *[]*string,
	NumberType: *string,
	DeletionProtectionEnabled: interface{},
	OptOutListName: *string,
	RegistrationId: *string,
	SelfManagedOptOutsEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts,
	TwoWayChannelArn: *string,
	TwoWayChannelEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode">IsoCountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType">MessageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities">NumberCapabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType">NumberType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId">RegistrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled">TwoWayChannelEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode"></a>

```go
IsoCountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}.

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType"></a>

```go
MessageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}.

---

##### `NumberCapabilities`<sup>Required</sup> <a name="NumberCapabilities" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities"></a>

```go
NumberCapabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}.

---

##### `NumberType`<sup>Required</sup> <a name="NumberType" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType"></a>

```go
NumberType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}.

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}.

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName"></a>

```go
OptOutListName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}.

---

##### `RegistrationId`<sup>Optional</sup> <a name="RegistrationId" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId"></a>

```go
RegistrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}.

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```go
SelfManagedOptOutsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts"></a>

```go
Timeouts Pinpointsmsvoicev2PhoneNumberTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}

---

##### `TwoWayChannelArn`<sup>Optional</sup> <a name="TwoWayChannelArn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn"></a>

```go
TwoWayChannelArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}.

---

##### `TwoWayChannelEnabled`<sup>Optional</sup> <a name="TwoWayChannelEnabled" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled"></a>

```go
TwoWayChannelEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}.

---

### Pinpointsmsvoicev2PhoneNumberTimeouts <a name="Pinpointsmsvoicev2PhoneNumberTimeouts" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

&pinpointsmsvoicev2phonenumber.Pinpointsmsvoicev2PhoneNumberTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference <a name="Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointsmsvoicev2phonenumber"

pinpointsmsvoicev2phonenumber.NewPinpointsmsvoicev2PhoneNumberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



