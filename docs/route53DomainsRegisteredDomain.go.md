# `route53DomainsRegisteredDomain` Submodule <a name="`route53DomainsRegisteredDomain` Submodule" id="@cdktf/provider-aws.route53DomainsRegisteredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsRegisteredDomain <a name="Route53DomainsRegisteredDomain" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomain(scope Construct, id *string, config Route53DomainsRegisteredDomainConfig) Route53DomainsRegisteredDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer">PutNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact">PutTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact">ResetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy">ResetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer">ResetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact">ResetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy">ResetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact">ResetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy">ResetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock">ResetTransferLock</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact"></a>

```go
func PutAdminContact(value Route53DomainsRegisteredDomainAdminContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `PutNameServer` <a name="PutNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer"></a>

```go
func PutNameServer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact"></a>

```go
func PutRegistrantContact(value Route53DomainsRegisteredDomainRegistrantContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `PutTechContact` <a name="PutTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact"></a>

```go
func PutTechContact(value Route53DomainsRegisteredDomainTechContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts"></a>

```go
func PutTimeouts(value Route53DomainsRegisteredDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

---

##### `ResetAdminContact` <a name="ResetAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact"></a>

```go
func ResetAdminContact()
```

##### `ResetAdminPrivacy` <a name="ResetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy"></a>

```go
func ResetAdminPrivacy()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetNameServer` <a name="ResetNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer"></a>

```go
func ResetNameServer()
```

##### `ResetRegistrantContact` <a name="ResetRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact"></a>

```go
func ResetRegistrantContact()
```

##### `ResetRegistrantPrivacy` <a name="ResetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy"></a>

```go
func ResetRegistrantPrivacy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTechContact` <a name="ResetTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact"></a>

```go
func ResetTechContact()
```

##### `ResetTechPrivacy` <a name="ResetTechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy"></a>

```go
func ResetTechPrivacy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransferLock` <a name="ResetTransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock"></a>

```go
func ResetTransferLock()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.Route53DomainsRegisteredDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.Route53DomainsRegisteredDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.Route53DomainsRegisteredDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail">AbuseContactEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone">AbuseContactPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer">NameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName">RegistrarName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl">RegistrarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller">Reseller</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList">StatusList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact">TechContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate">UpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer">WhoisServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput">AdminContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput">AdminPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput">NameServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput">RegistrantContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput">RegistrantPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput">TechContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput">TechPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput">TransferLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy">AdminPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy">TechPrivacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock">TransferLock</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbuseContactEmail`<sup>Required</sup> <a name="AbuseContactEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail"></a>

```go
func AbuseContactEmail() *string
```

- *Type:* *string

---

##### `AbuseContactPhone`<sup>Required</sup> <a name="AbuseContactPhone" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone"></a>

```go
func AbuseContactPhone() *string
```

- *Type:* *string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact"></a>

```go
func AdminContact() Route53DomainsRegisteredDomainAdminContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `NameServer`<sup>Required</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer"></a>

```go
func NameServer() Route53DomainsRegisteredDomainNameServerList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact"></a>

```go
func RegistrantContact() Route53DomainsRegisteredDomainRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a>

---

##### `RegistrarName`<sup>Required</sup> <a name="RegistrarName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName"></a>

```go
func RegistrarName() *string
```

- *Type:* *string

---

##### `RegistrarUrl`<sup>Required</sup> <a name="RegistrarUrl" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl"></a>

```go
func RegistrarUrl() *string
```

- *Type:* *string

---

##### `Reseller`<sup>Required</sup> <a name="Reseller" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller"></a>

```go
func Reseller() *string
```

- *Type:* *string

---

##### `StatusList`<sup>Required</sup> <a name="StatusList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList"></a>

```go
func StatusList() *[]*string
```

- *Type:* *[]*string

---

##### `TechContact`<sup>Required</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact"></a>

```go
func TechContact() Route53DomainsRegisteredDomainTechContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts"></a>

```go
func Timeouts() Route53DomainsRegisteredDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a>

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate"></a>

```go
func UpdatedDate() *string
```

- *Type:* *string

---

##### `WhoisServer`<sup>Required</sup> <a name="WhoisServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer"></a>

```go
func WhoisServer() *string
```

- *Type:* *string

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput"></a>

```go
func AdminContactInput() Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `AdminPrivacyInput`<sup>Optional</sup> <a name="AdminPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput"></a>

```go
func AdminPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameServerInput`<sup>Optional</sup> <a name="NameServerInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput"></a>

```go
func NameServerInput() interface{}
```

- *Type:* interface{}

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput"></a>

```go
func RegistrantContactInput() Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `RegistrantPrivacyInput`<sup>Optional</sup> <a name="RegistrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput"></a>

```go
func RegistrantPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TechContactInput`<sup>Optional</sup> <a name="TechContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput"></a>

```go
func TechContactInput() Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `TechPrivacyInput`<sup>Optional</sup> <a name="TechPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput"></a>

```go
func TechPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransferLockInput`<sup>Optional</sup> <a name="TransferLockInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput"></a>

```go
func TransferLockInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPrivacy`<sup>Required</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy"></a>

```go
func AdminPrivacy() interface{}
```

- *Type:* interface{}

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegistrantPrivacy`<sup>Required</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy"></a>

```go
func RegistrantPrivacy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TechPrivacy`<sup>Required</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy"></a>

```go
func TechPrivacy() interface{}
```

- *Type:* interface{}

---

##### `TransferLock`<sup>Required</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock"></a>

```go
func TransferLock() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsRegisteredDomainAdminContact <a name="Route53DomainsRegisteredDomainAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainAdminContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParams: *map[string]*string,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams"></a>

```go
ExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainConfig <a name="Route53DomainsRegisteredDomainConfig" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	AdminContact: github.com/cdktf/cdktf-provider-aws-go/aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact,
	AdminPrivacy: interface{},
	AutoRenew: interface{},
	Id: *string,
	NameServer: interface{},
	RegistrantContact: github.com/cdktf/cdktf-provider-aws-go/aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact,
	RegistrantPrivacy: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TechContact: github.com/cdktf/cdktf-provider-aws-go/aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact,
	TechPrivacy: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts,
	TransferLock: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy">AdminPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer">NameServer</a></code> | <code>interface{}</code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact">TechContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy">TechPrivacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock">TransferLock</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `AdminContact`<sup>Optional</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact"></a>

```go
AdminContact Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `AdminPrivacy`<sup>Optional</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy"></a>

```go
AdminPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameServer`<sup>Optional</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer"></a>

```go
NameServer interface{}
```

- *Type:* interface{}

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `RegistrantContact`<sup>Optional</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact"></a>

```go
RegistrantContact Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `RegistrantPrivacy`<sup>Optional</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy"></a>

```go
RegistrantPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `TechContact`<sup>Optional</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact"></a>

```go
TechContact Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `TechPrivacy`<sup>Optional</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy"></a>

```go
TechPrivacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts"></a>

```go
Timeouts Route53DomainsRegisteredDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `TransferLock`<sup>Optional</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock"></a>

```go
TransferLock interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

### Route53DomainsRegisteredDomainNameServer <a name="Route53DomainsRegisteredDomainNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainNameServer {
	Name: *string,
	GlueIps: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps">GlueIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}.

---

##### `GlueIps`<sup>Optional</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps"></a>

```go
GlueIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}.

---

### Route53DomainsRegisteredDomainRegistrantContact <a name="Route53DomainsRegisteredDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainRegistrantContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParams: *map[string]*string,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams"></a>

```go
ExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTechContact <a name="Route53DomainsRegisteredDomainTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainTechContact {
	AddressLine1: *string,
	AddressLine2: *string,
	City: *string,
	ContactType: *string,
	CountryCode: *string,
	Email: *string,
	ExtraParams: *map[string]*string,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType">ContactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode">ZipCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType"></a>

```go
ContactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams"></a>

```go
ExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTimeouts <a name="Route53DomainsRegisteredDomainTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

&route53domainsregistereddomain.Route53DomainsRegisteredDomainTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsRegisteredDomainAdminContactOutputReference <a name="Route53DomainsRegisteredDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainAdminContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsRegisteredDomainAdminContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams"></a>

```go
func ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput"></a>

```go
func ExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams"></a>

```go
func ExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---


### Route53DomainsRegisteredDomainNameServerList <a name="Route53DomainsRegisteredDomainNameServerList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainNameServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsRegisteredDomainNameServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get"></a>

```go
func Get(index *f64) Route53DomainsRegisteredDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsRegisteredDomainNameServerOutputReference <a name="Route53DomainsRegisteredDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainNameServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsRegisteredDomainNameServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps">ResetGlueIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueIps` <a name="ResetGlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps"></a>

```go
func ResetGlueIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput">GlueIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps">GlueIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueIpsInput`<sup>Optional</sup> <a name="GlueIpsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput"></a>

```go
func GlueIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `GlueIps`<sup>Required</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps"></a>

```go
func GlueIps() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsRegisteredDomainRegistrantContactOutputReference <a name="Route53DomainsRegisteredDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainRegistrantContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsRegisteredDomainRegistrantContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams"></a>

```go
func ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput"></a>

```go
func ExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams"></a>

```go
func ExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---


### Route53DomainsRegisteredDomainTechContactOutputReference <a name="Route53DomainsRegisteredDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainTechContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsRegisteredDomainTechContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType"></a>

```go
func ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams"></a>

```go
func ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax"></a>

```go
func ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode"></a>

```go
func ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType">ContactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput"></a>

```go
func ContactTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput"></a>

```go
func ExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType"></a>

```go
func ContactType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams"></a>

```go
func ExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---


### Route53DomainsRegisteredDomainTimeoutsOutputReference <a name="Route53DomainsRegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53domainsregistereddomain"

route53domainsregistereddomain.NewRoute53DomainsRegisteredDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsRegisteredDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



