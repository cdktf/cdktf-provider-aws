# `route53DomainsDomain` Submodule <a name="`route53DomainsDomain` Submodule" id="@cdktf/provider-aws.route53DomainsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDomain <a name="Route53DomainsDomain" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain aws_route53domains_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomain(scope Construct, id *string, config Route53DomainsDomainConfig) Route53DomainsDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig">Route53DomainsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig">Route53DomainsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact">PutBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer">PutNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact">PutTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact">ResetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy">ResetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact">ResetBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy">ResetBillingPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears">ResetDurationInYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer">ResetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact">ResetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy">ResetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact">ResetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy">ResetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock">ResetTransferLock</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact"></a>

```go
func PutAdminContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBillingContact` <a name="PutBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact"></a>

```go
func PutBillingContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNameServer` <a name="PutNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer"></a>

```go
func PutNameServer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact"></a>

```go
func PutRegistrantContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTechContact` <a name="PutTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact"></a>

```go
func PutTechContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts"></a>

```go
func PutTimeouts(value Route53DomainsDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---

##### `ResetAdminContact` <a name="ResetAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact"></a>

```go
func ResetAdminContact()
```

##### `ResetAdminPrivacy` <a name="ResetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy"></a>

```go
func ResetAdminPrivacy()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetBillingContact` <a name="ResetBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact"></a>

```go
func ResetBillingContact()
```

##### `ResetBillingPrivacy` <a name="ResetBillingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy"></a>

```go
func ResetBillingPrivacy()
```

##### `ResetDurationInYears` <a name="ResetDurationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears"></a>

```go
func ResetDurationInYears()
```

##### `ResetNameServer` <a name="ResetNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer"></a>

```go
func ResetNameServer()
```

##### `ResetRegistrantContact` <a name="ResetRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact"></a>

```go
func ResetRegistrantContact()
```

##### `ResetRegistrantPrivacy` <a name="ResetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy"></a>

```go
func ResetRegistrantPrivacy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTechContact` <a name="ResetTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact"></a>

```go
func ResetTechContact()
```

##### `ResetTechPrivacy` <a name="ResetTechPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy"></a>

```go
func ResetTechPrivacy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransferLock` <a name="ResetTransferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock"></a>

```go
func ResetTransferLock()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.Route53DomainsDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.Route53DomainsDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.Route53DomainsDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.Route53DomainsDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53DomainsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53DomainsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail">AbuseContactEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone">AbuseContactPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact">BillingContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer">NameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName">RegistrarName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl">RegistrarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList">StatusList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact">TechContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate">UpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer">WhoisServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput">AdminContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput">AdminPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput">BillingContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput">BillingPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput">DurationInYearsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput">NameServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput">RegistrantContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput">RegistrantPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput">TechContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput">TechPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput">TransferLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy">AdminPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy">BillingPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears">DurationInYears</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy">TechPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock">TransferLock</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbuseContactEmail`<sup>Required</sup> <a name="AbuseContactEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail"></a>

```go
func AbuseContactEmail() *string
```

- *Type:* *string

---

##### `AbuseContactPhone`<sup>Required</sup> <a name="AbuseContactPhone" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone"></a>

```go
func AbuseContactPhone() *string
```

- *Type:* *string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact"></a>

```go
func AdminContact() Route53DomainsDomainAdminContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a>

---

##### `BillingContact`<sup>Required</sup> <a name="BillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact"></a>

```go
func BillingContact() Route53DomainsDomainBillingContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `NameServer`<sup>Required</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer"></a>

```go
func NameServer() Route53DomainsDomainNameServerList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact"></a>

```go
func RegistrantContact() Route53DomainsDomainRegistrantContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a>

---

##### `RegistrarName`<sup>Required</sup> <a name="RegistrarName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName"></a>

```go
func RegistrarName() *string
```

- *Type:* *string

---

##### `RegistrarUrl`<sup>Required</sup> <a name="RegistrarUrl" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl"></a>

```go
func RegistrarUrl() *string
```

- *Type:* *string

---

##### `StatusList`<sup>Required</sup> <a name="StatusList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList"></a>

```go
func StatusList() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TechContact`<sup>Required</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact"></a>

```go
func TechContact() Route53DomainsDomainTechContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts"></a>

```go
func Timeouts() Route53DomainsDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a>

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate"></a>

```go
func UpdatedDate() *string
```

- *Type:* *string

---

##### `WhoisServer`<sup>Required</sup> <a name="WhoisServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer"></a>

```go
func WhoisServer() *string
```

- *Type:* *string

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput"></a>

```go
func AdminContactInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPrivacyInput`<sup>Optional</sup> <a name="AdminPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput"></a>

```go
func AdminPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `BillingContactInput`<sup>Optional</sup> <a name="BillingContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput"></a>

```go
func BillingContactInput() interface{}
```

- *Type:* interface{}

---

##### `BillingPrivacyInput`<sup>Optional</sup> <a name="BillingPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput"></a>

```go
func BillingPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DurationInYearsInput`<sup>Optional</sup> <a name="DurationInYearsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput"></a>

```go
func DurationInYearsInput() *f64
```

- *Type:* *f64

---

##### `NameServerInput`<sup>Optional</sup> <a name="NameServerInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput"></a>

```go
func NameServerInput() interface{}
```

- *Type:* interface{}

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput"></a>

```go
func RegistrantContactInput() interface{}
```

- *Type:* interface{}

---

##### `RegistrantPrivacyInput`<sup>Optional</sup> <a name="RegistrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput"></a>

```go
func RegistrantPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TechContactInput`<sup>Optional</sup> <a name="TechContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput"></a>

```go
func TechContactInput() interface{}
```

- *Type:* interface{}

---

##### `TechPrivacyInput`<sup>Optional</sup> <a name="TechPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput"></a>

```go
func TechPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransferLockInput`<sup>Optional</sup> <a name="TransferLockInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput"></a>

```go
func TransferLockInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPrivacy`<sup>Required</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy"></a>

```go
func AdminPrivacy() interface{}
```

- *Type:* interface{}

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `BillingPrivacy`<sup>Required</sup> <a name="BillingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy"></a>

```go
func BillingPrivacy() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DurationInYears`<sup>Required</sup> <a name="DurationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears"></a>

```go
func DurationInYears() *f64
```

- *Type:* *f64

---

##### `RegistrantPrivacy`<sup>Required</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy"></a>

```go
func RegistrantPrivacy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TechPrivacy`<sup>Required</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy"></a>

```go
func TechPrivacy() interface{}
```

- *Type:* interface{}

---

##### `TransferLock`<sup>Required</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock"></a>

```go
func TransferLock() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDomainAdminContact <a name="Route53DomainsDomainAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainAdminContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParam: interface{},
	Fax: *string,
	FirstName: *string,
	LastName: *string,
	OrganizationName: *string,
	PhoneNumber: *string,
	State: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam">ExtraParam</a></code> | <code>interface{}</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `ExtraParam`<sup>Optional</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam"></a>

```go
ExtraParam interface{}
```

- *Type:* interface{}

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainAdminContactExtraParam <a name="Route53DomainsDomainAdminContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainAdminContactExtraParam {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainBillingContact <a name="Route53DomainsDomainBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainBillingContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParam: interface{},
	Fax: *string,
	FirstName: *string,
	LastName: *string,
	OrganizationName: *string,
	PhoneNumber: *string,
	State: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam">ExtraParam</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `ExtraParam`<sup>Optional</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam"></a>

```go
ExtraParam interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainBillingContactExtraParam <a name="Route53DomainsDomainBillingContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainBillingContactExtraParam {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainConfig <a name="Route53DomainsDomainConfig" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	AdminContact: interface{},
	AdminPrivacy: interface{},
	AutoRenew: interface{},
	BillingContact: interface{},
	BillingPrivacy: interface{},
	DurationInYears: *f64,
	NameServer: interface{},
	RegistrantContact: interface{},
	RegistrantPrivacy: interface{},
	Tags: *map[string]*string,
	TechContact: interface{},
	TechPrivacy: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.route53DomainsDomain.Route53DomainsDomainTimeouts,
	TransferLock: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact">AdminContact</a></code> | <code>interface{}</code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy">AdminPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact">BillingContact</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy">BillingPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears">DurationInYears</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer">NameServer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact">RegistrantContact</a></code> | <code>interface{}</code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact">TechContact</a></code> | <code>interface{}</code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy">TechPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock">TransferLock</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `AdminContact`<sup>Optional</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact"></a>

```go
AdminContact interface{}
```

- *Type:* interface{}

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `AdminPrivacy`<sup>Optional</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy"></a>

```go
AdminPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `BillingContact`<sup>Optional</sup> <a name="BillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact"></a>

```go
BillingContact interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `BillingPrivacy`<sup>Optional</sup> <a name="BillingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy"></a>

```go
BillingPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `DurationInYears`<sup>Optional</sup> <a name="DurationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears"></a>

```go
DurationInYears *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `NameServer`<sup>Optional</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer"></a>

```go
NameServer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `RegistrantContact`<sup>Optional</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact"></a>

```go
RegistrantContact interface{}
```

- *Type:* interface{}

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `RegistrantPrivacy`<sup>Optional</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy"></a>

```go
RegistrantPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `TechContact`<sup>Optional</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact"></a>

```go
TechContact interface{}
```

- *Type:* interface{}

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `TechPrivacy`<sup>Optional</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy"></a>

```go
TechPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts"></a>

```go
Timeouts Route53DomainsDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `TransferLock`<sup>Optional</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock"></a>

```go
TransferLock interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

### Route53DomainsDomainNameServer <a name="Route53DomainsDomainNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainNameServer {
	GlueIps: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps">GlueIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |

---

##### `GlueIps`<sup>Optional</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps"></a>

```go
GlueIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

### Route53DomainsDomainRegistrantContact <a name="Route53DomainsDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainRegistrantContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParam: interface{},
	Fax: *string,
	FirstName: *string,
	LastName: *string,
	OrganizationName: *string,
	PhoneNumber: *string,
	State: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam">ExtraParam</a></code> | <code>interface{}</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `ExtraParam`<sup>Optional</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam"></a>

```go
ExtraParam interface{}
```

- *Type:* interface{}

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainRegistrantContactExtraParam <a name="Route53DomainsDomainRegistrantContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainRegistrantContactExtraParam {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTechContact <a name="Route53DomainsDomainTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainTechContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParam: interface{},
	Fax: *string,
	FirstName: *string,
	LastName: *string,
	OrganizationName: *string,
	PhoneNumber: *string,
	State: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam">ExtraParam</a></code> | <code>interface{}</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `ExtraParam`<sup>Optional</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam"></a>

```go
ExtraParam interface{}
```

- *Type:* interface{}

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainTechContactExtraParam <a name="Route53DomainsDomainTechContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainTechContactExtraParam {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTimeouts <a name="Route53DomainsDomainTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

&route53domainsdomain.Route53DomainsDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDomainAdminContactExtraParamList <a name="Route53DomainsDomainAdminContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainAdminContactExtraParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainAdminContactExtraParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainAdminContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainAdminContactExtraParamOutputReference <a name="Route53DomainsDomainAdminContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainAdminContactExtraParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainAdminContactExtraParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainAdminContactList <a name="Route53DomainsDomainAdminContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainAdminContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainAdminContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainAdminContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainAdminContactOutputReference <a name="Route53DomainsDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainAdminContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainAdminContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam">PutExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam">ResetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParam` <a name="PutExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam"></a>

```go
func PutExtraParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParam` <a name="ResetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam"></a>

```go
func ResetExtraParam()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam">ExtraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput">ExtraParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraParam`<sup>Required</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam"></a>

```go
func ExtraParam() Route53DomainsDomainAdminContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a>

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamInput`<sup>Optional</sup> <a name="ExtraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput"></a>

```go
func ExtraParamInput() interface{}
```

- *Type:* interface{}

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainBillingContactExtraParamList <a name="Route53DomainsDomainBillingContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainBillingContactExtraParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainBillingContactExtraParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainBillingContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainBillingContactExtraParamOutputReference <a name="Route53DomainsDomainBillingContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainBillingContactExtraParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainBillingContactExtraParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainBillingContactList <a name="Route53DomainsDomainBillingContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainBillingContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainBillingContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainBillingContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainBillingContactOutputReference <a name="Route53DomainsDomainBillingContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainBillingContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainBillingContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam">PutExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam">ResetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParam` <a name="PutExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam"></a>

```go
func PutExtraParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParam` <a name="ResetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam"></a>

```go
func ResetExtraParam()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam">ExtraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput">ExtraParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraParam`<sup>Required</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam"></a>

```go
func ExtraParam() Route53DomainsDomainBillingContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a>

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamInput`<sup>Optional</sup> <a name="ExtraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput"></a>

```go
func ExtraParamInput() interface{}
```

- *Type:* interface{}

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainNameServerList <a name="Route53DomainsDomainNameServerList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainNameServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainNameServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainNameServerOutputReference <a name="Route53DomainsDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainNameServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainNameServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps">ResetGlueIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueIps` <a name="ResetGlueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps"></a>

```go
func ResetGlueIps()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput">GlueIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps">GlueIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueIpsInput`<sup>Optional</sup> <a name="GlueIpsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput"></a>

```go
func GlueIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `GlueIps`<sup>Required</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps"></a>

```go
func GlueIps() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainRegistrantContactExtraParamList <a name="Route53DomainsDomainRegistrantContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainRegistrantContactExtraParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainRegistrantContactExtraParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainRegistrantContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainRegistrantContactExtraParamOutputReference <a name="Route53DomainsDomainRegistrantContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainRegistrantContactExtraParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainRegistrantContactExtraParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainRegistrantContactList <a name="Route53DomainsDomainRegistrantContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainRegistrantContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainRegistrantContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainRegistrantContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainRegistrantContactOutputReference <a name="Route53DomainsDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainRegistrantContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainRegistrantContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam">PutExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam">ResetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParam` <a name="PutExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam"></a>

```go
func PutExtraParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParam` <a name="ResetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam"></a>

```go
func ResetExtraParam()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam">ExtraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput">ExtraParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraParam`<sup>Required</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam"></a>

```go
func ExtraParam() Route53DomainsDomainRegistrantContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a>

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamInput`<sup>Optional</sup> <a name="ExtraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput"></a>

```go
func ExtraParamInput() interface{}
```

- *Type:* interface{}

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainTechContactExtraParamList <a name="Route53DomainsDomainTechContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainTechContactExtraParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainTechContactExtraParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainTechContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainTechContactExtraParamOutputReference <a name="Route53DomainsDomainTechContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainTechContactExtraParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainTechContactExtraParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainTechContactList <a name="Route53DomainsDomainTechContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainTechContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDomainTechContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get"></a>

```go
func Get(index *f64) Route53DomainsDomainTechContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainTechContactOutputReference <a name="Route53DomainsDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainTechContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDomainTechContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam">PutExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam">ResetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParam` <a name="PutExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam"></a>

```go
func PutExtraParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParam` <a name="ResetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam"></a>

```go
func ResetExtraParam()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam">ExtraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput">ExtraParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraParam`<sup>Required</sup> <a name="ExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam"></a>

```go
func ExtraParam() Route53DomainsDomainTechContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a>

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamInput`<sup>Optional</sup> <a name="ExtraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput"></a>

```go
func ExtraParamInput() interface{}
```

- *Type:* interface{}

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDomainTimeoutsOutputReference <a name="Route53DomainsDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdomain"

route53domainsdomain.NewRoute53DomainsDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



