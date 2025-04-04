# `verifiedaccessEndpoint` Submodule <a name="`verifiedaccessEndpoint` Submodule" id="@cdktf/provider-aws.verifiedaccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessEndpoint <a name="VerifiedaccessEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpoint(scope Construct, id *string, config VerifiedaccessEndpointConfig) VerifiedaccessEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig">VerifiedaccessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig">VerifiedaccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions">PutCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions">PutLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions">PutNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions">PutRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetApplicationDomain">ResetApplicationDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetCidrOptions">ResetCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDomainCertificateArn">ResetDomainCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetEndpointDomainPrefix">ResetEndpointDomainPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions">ResetLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions">ResetNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRdsOptions">ResetRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCidrOptions` <a name="PutCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions"></a>

```go
func PutCidrOptions(value VerifiedaccessEndpointCidrOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---

##### `PutLoadBalancerOptions` <a name="PutLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions"></a>

```go
func PutLoadBalancerOptions(value VerifiedaccessEndpointLoadBalancerOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---

##### `PutNetworkInterfaceOptions` <a name="PutNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions"></a>

```go
func PutNetworkInterfaceOptions(value VerifiedaccessEndpointNetworkInterfaceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---

##### `PutRdsOptions` <a name="PutRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions"></a>

```go
func PutRdsOptions(value VerifiedaccessEndpointRdsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification"></a>

```go
func PutSseSpecification(value VerifiedaccessEndpointSseSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value VerifiedaccessEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

---

##### `ResetApplicationDomain` <a name="ResetApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetApplicationDomain"></a>

```go
func ResetApplicationDomain()
```

##### `ResetCidrOptions` <a name="ResetCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetCidrOptions"></a>

```go
func ResetCidrOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainCertificateArn` <a name="ResetDomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDomainCertificateArn"></a>

```go
func ResetDomainCertificateArn()
```

##### `ResetEndpointDomainPrefix` <a name="ResetEndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetEndpointDomainPrefix"></a>

```go
func ResetEndpointDomainPrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerOptions` <a name="ResetLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions"></a>

```go
func ResetLoadBalancerOptions()
```

##### `ResetNetworkInterfaceOptions` <a name="ResetNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions"></a>

```go
func ResetNetworkInterfaceOptions()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetRdsOptions` <a name="ResetRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRdsOptions"></a>

```go
func ResetRdsOptions()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification"></a>

```go
func ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.VerifiedaccessEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.VerifiedaccessEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.VerifiedaccessEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.VerifiedaccessEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedaccessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedaccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference">VerifiedaccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference">VerifiedaccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput">ApplicationDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptionsInput">CidrOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput">DomainCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput">EndpointDomainPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput">LoadBalancerOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput">NetworkInterfaceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptionsInput">RdsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput">VerifiedAccessGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptions"></a>

```go
func CidrOptions() VerifiedaccessEndpointCidrOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference">VerifiedaccessEndpointCidrOptionsOutputReference</a>

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain"></a>

```go
func DeviceValidationDomain() *string
```

- *Type:* *string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain"></a>

```go
func EndpointDomain() *string
```

- *Type:* *string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions"></a>

```go
func LoadBalancerOptions() VerifiedaccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions"></a>

```go
func NetworkInterfaceOptions() VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptions"></a>

```go
func RdsOptions() VerifiedaccessEndpointRdsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference">VerifiedaccessEndpointRdsOptionsOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification"></a>

```go
func SseSpecification() VerifiedaccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts"></a>

```go
func Timeouts() VerifiedaccessEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a>

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId"></a>

```go
func VerifiedAccessInstanceId() *string
```

- *Type:* *string

---

##### `ApplicationDomainInput`<sup>Optional</sup> <a name="ApplicationDomainInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput"></a>

```go
func ApplicationDomainInput() *string
```

- *Type:* *string

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput"></a>

```go
func AttachmentTypeInput() *string
```

- *Type:* *string

---

##### `CidrOptionsInput`<sup>Optional</sup> <a name="CidrOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptionsInput"></a>

```go
func CidrOptionsInput() VerifiedaccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainCertificateArnInput`<sup>Optional</sup> <a name="DomainCertificateArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput"></a>

```go
func DomainCertificateArnInput() *string
```

- *Type:* *string

---

##### `EndpointDomainPrefixInput`<sup>Optional</sup> <a name="EndpointDomainPrefixInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput"></a>

```go
func EndpointDomainPrefixInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerOptionsInput`<sup>Optional</sup> <a name="LoadBalancerOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput"></a>

```go
func LoadBalancerOptionsInput() VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---

##### `NetworkInterfaceOptionsInput`<sup>Optional</sup> <a name="NetworkInterfaceOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput"></a>

```go
func NetworkInterfaceOptionsInput() VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `RdsOptionsInput`<sup>Optional</sup> <a name="RdsOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptionsInput"></a>

```go
func RdsOptionsInput() VerifiedaccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput"></a>

```go
func SseSpecificationInput() VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VerifiedAccessGroupIdInput`<sup>Optional</sup> <a name="VerifiedAccessGroupIdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```go
func VerifiedAccessGroupIdInput() *string
```

- *Type:* *string

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain"></a>

```go
func ApplicationDomain() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn"></a>

```go
func DomainCertificateArn() *string
```

- *Type:* *string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix"></a>

```go
func EndpointDomainPrefix() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId"></a>

```go
func VerifiedAccessGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessEndpointCidrOptions <a name="VerifiedaccessEndpointCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointCidrOptions {
	Cidr: *string,
	PortRange: interface{},
	Protocol: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.cidr">Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#cidr VerifiedaccessEndpoint#cidr}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.portRange">PortRange</a></code> | <code>interface{}</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#cidr VerifiedaccessEndpoint#cidr}.

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.portRange"></a>

```go
PortRange interface{}
```

- *Type:* interface{}

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointCidrOptionsPortRange <a name="VerifiedaccessEndpointCidrOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointCidrOptionsPortRange {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointConfig <a name="VerifiedaccessEndpointConfig" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentType: *string,
	EndpointType: *string,
	VerifiedAccessGroupId: *string,
	ApplicationDomain: *string,
	CidrOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions,
	Description: *string,
	DomainCertificateArn: *string,
	EndpointDomainPrefix: *string,
	Id: *string,
	LoadBalancerOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions,
	NetworkInterfaceOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions,
	PolicyDocument: *string,
	RdsOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions,
	SecurityGroupIds: *[]*string,
	SseSpecification: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain">ApplicationDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | cidr_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | load_balancer_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | network_interface_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | rds_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | sse_specification block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType"></a>

```go
AttachmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}.

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId"></a>

```go
VerifiedAccessGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}.

---

##### `ApplicationDomain`<sup>Optional</sup> <a name="ApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain"></a>

```go
ApplicationDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}.

---

##### `CidrOptions`<sup>Optional</sup> <a name="CidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.cidrOptions"></a>

```go
CidrOptions VerifiedaccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

cidr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#cidr_options VerifiedaccessEndpoint#cidr_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}.

---

##### `DomainCertificateArn`<sup>Optional</sup> <a name="DomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn"></a>

```go
DomainCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}.

---

##### `EndpointDomainPrefix`<sup>Optional</sup> <a name="EndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix"></a>

```go
EndpointDomainPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerOptions`<sup>Optional</sup> <a name="LoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions"></a>

```go
LoadBalancerOptions VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

load_balancer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}

---

##### `NetworkInterfaceOptions`<sup>Optional</sup> <a name="NetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions"></a>

```go
NetworkInterfaceOptions VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

network_interface_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}.

---

##### `RdsOptions`<sup>Optional</sup> <a name="RdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.rdsOptions"></a>

```go
RdsOptions VerifiedaccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

rds_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_options VerifiedaccessEndpoint#rds_options}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}.

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification"></a>

```go
SseSpecification VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

sse_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts"></a>

```go
Timeouts VerifiedaccessEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}

---

### VerifiedaccessEndpointLoadBalancerOptions <a name="VerifiedaccessEndpointLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointLoadBalancerOptions {
	LoadBalancerArn: *string,
	Port: *f64,
	PortRange: interface{},
	Protocol: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.portRange">PortRange</a></code> | <code>interface{}</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `LoadBalancerArn`<sup>Optional</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.portRange"></a>

```go
PortRange interface{}
```

- *Type:* interface{}

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointLoadBalancerOptionsPortRange <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointNetworkInterfaceOptions <a name="VerifiedaccessEndpointNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointNetworkInterfaceOptions {
	NetworkInterfaceId: *string,
	Port: *f64,
	PortRange: interface{},
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.portRange">PortRange</a></code> | <code>interface{}</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.portRange"></a>

```go
PortRange interface{}
```

- *Type:* interface{}

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

### VerifiedaccessEndpointNetworkInterfaceOptionsPortRange <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointRdsOptions <a name="VerifiedaccessEndpointRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointRdsOptions {
	Port: *f64,
	Protocol: *string,
	RdsDbClusterArn: *string,
	RdsDbInstanceArn: *string,
	RdsDbProxyArn: *string,
	RdsEndpoint: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_cluster_arn VerifiedaccessEndpoint#rds_db_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_instance_arn VerifiedaccessEndpoint#rds_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_proxy_arn VerifiedaccessEndpoint#rds_db_proxy_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsEndpoint">RdsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_endpoint VerifiedaccessEndpoint#rds_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `RdsDbClusterArn`<sup>Optional</sup> <a name="RdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```go
RdsDbClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_cluster_arn VerifiedaccessEndpoint#rds_db_cluster_arn}.

---

##### `RdsDbInstanceArn`<sup>Optional</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```go
RdsDbInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_instance_arn VerifiedaccessEndpoint#rds_db_instance_arn}.

---

##### `RdsDbProxyArn`<sup>Optional</sup> <a name="RdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```go
RdsDbProxyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_db_proxy_arn VerifiedaccessEndpoint#rds_db_proxy_arn}.

---

##### `RdsEndpoint`<sup>Optional</sup> <a name="RdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsEndpoint"></a>

```go
RdsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#rds_endpoint VerifiedaccessEndpoint#rds_endpoint}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointSseSpecification <a name="VerifiedaccessEndpointSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointSseSpecification {
	CustomerManagedKeyEnabled: interface{},
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```go
CustomerManagedKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}.

---

### VerifiedaccessEndpointTimeouts <a name="VerifiedaccessEndpointTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

&verifiedaccessendpoint.VerifiedaccessEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessEndpointCidrOptionsOutputReference <a name="VerifiedaccessEndpointCidrOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointCidrOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointCidrOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange"></a>

```go
func PutPortRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList">VerifiedaccessEndpointCidrOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRange"></a>

```go
func PortRange() VerifiedaccessEndpointCidrOptionsPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList">VerifiedaccessEndpointCidrOptionsPortRangeList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---


### VerifiedaccessEndpointCidrOptionsPortRangeList <a name="VerifiedaccessEndpointCidrOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointCidrOptionsPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedaccessEndpointCidrOptionsPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get"></a>

```go
func Get(index *f64) VerifiedaccessEndpointCidrOptionsPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointCidrOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointCidrOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointCidrOptionsPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedaccessEndpointCidrOptionsPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointLoadBalancerOptionsOutputReference <a name="VerifiedaccessEndpointLoadBalancerOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointLoadBalancerOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointLoadBalancerOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">ResetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange"></a>

```go
func PutPortRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLoadBalancerArn` <a name="ResetLoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```go
func ResetLoadBalancerArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList">VerifiedaccessEndpointLoadBalancerOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRange"></a>

```go
func PortRange() VerifiedaccessEndpointLoadBalancerOptionsPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList">VerifiedaccessEndpointLoadBalancerOptionsPortRangeList</a>

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---


### VerifiedaccessEndpointLoadBalancerOptionsPortRangeList <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointLoadBalancerOptionsPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedaccessEndpointLoadBalancerOptionsPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get"></a>

```go
func Get(index *f64) VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference <a name="VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointNetworkInterfaceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange"></a>

```go
func PutPortRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```go
func ResetNetworkInterfaceId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList">VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRange"></a>

```go
func PortRange() VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList">VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList</a>

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---


### VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get"></a>

```go
func Get(index *f64) VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedaccessEndpointRdsOptionsOutputReference <a name="VerifiedaccessEndpointRdsOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointRdsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointRdsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">ResetRdsDbClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">ResetRdsDbInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">ResetRdsDbProxyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">ResetRdsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRdsDbClusterArn` <a name="ResetRdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```go
func ResetRdsDbClusterArn()
```

##### `ResetRdsDbInstanceArn` <a name="ResetRdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```go
func ResetRdsDbInstanceArn()
```

##### `ResetRdsDbProxyArn` <a name="ResetRdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```go
func ResetRdsDbProxyArn()
```

##### `ResetRdsEndpoint` <a name="ResetRdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```go
func ResetRdsEndpoint()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">RdsDbClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">RdsDbInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">RdsDbProxyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">RdsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RdsDbClusterArnInput`<sup>Optional</sup> <a name="RdsDbClusterArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```go
func RdsDbClusterArnInput() *string
```

- *Type:* *string

---

##### `RdsDbInstanceArnInput`<sup>Optional</sup> <a name="RdsDbInstanceArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```go
func RdsDbInstanceArnInput() *string
```

- *Type:* *string

---

##### `RdsDbProxyArnInput`<sup>Optional</sup> <a name="RdsDbProxyArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```go
func RdsDbProxyArnInput() *string
```

- *Type:* *string

---

##### `RdsEndpointInput`<sup>Optional</sup> <a name="RdsEndpointInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```go
func RdsEndpointInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```go
func RdsDbClusterArn() *string
```

- *Type:* *string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```go
func RdsDbInstanceArn() *string
```

- *Type:* *string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```go
func RdsDbProxyArn() *string
```

- *Type:* *string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```go
func RdsEndpoint() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---


### VerifiedaccessEndpointSseSpecificationOutputReference <a name="VerifiedaccessEndpointSseSpecificationOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```go
func ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```go
func CustomerManagedKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---


### VerifiedaccessEndpointTimeoutsOutputReference <a name="VerifiedaccessEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedaccessendpoint"

verifiedaccessendpoint.NewVerifiedaccessEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



