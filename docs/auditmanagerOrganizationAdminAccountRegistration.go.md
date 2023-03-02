# `auditmanagerOrganizationAdminAccountRegistration` Submodule <a name="`auditmanagerOrganizationAdminAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerOrganizationAdminAccountRegistration <a name="AuditmanagerOrganizationAdminAccountRegistration" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerorganizationadminaccountregistration"

auditmanagerorganizationadminaccountregistration.NewAuditmanagerOrganizationAdminAccountRegistration(scope Construct, id *string, config AuditmanagerOrganizationAdminAccountRegistrationConfig) AuditmanagerOrganizationAdminAccountRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerorganizationadminaccountregistration"

auditmanagerorganizationadminaccountregistration.AuditmanagerOrganizationAdminAccountRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerorganizationadminaccountregistration"

auditmanagerorganizationadminaccountregistration.AuditmanagerOrganizationAdminAccountRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerorganizationadminaccountregistration"

auditmanagerorganizationadminaccountregistration.AuditmanagerOrganizationAdminAccountRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput">AdminAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId">AdminAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `AdminAccountIdInput`<sup>Optional</sup> <a name="AdminAccountIdInput" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput"></a>

```go
func AdminAccountIdInput() *string
```

- *Type:* *string

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId"></a>

```go
func AdminAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerOrganizationAdminAccountRegistrationConfig <a name="AuditmanagerOrganizationAdminAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerorganizationadminaccountregistration"

&auditmanagerorganizationadminaccountregistration.AuditmanagerOrganizationAdminAccountRegistrationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId">AdminAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId"></a>

```go
AdminAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}.

---



