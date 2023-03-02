# `organizationsDelegatedAdministrator` Submodule <a name="`organizationsDelegatedAdministrator` Submodule" id="@cdktf/provider-aws.organizationsDelegatedAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsDelegatedAdministrator <a name="OrganizationsDelegatedAdministrator" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator aws_organizations_delegated_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsdelegatedadministrator"

organizationsdelegatedadministrator.NewOrganizationsDelegatedAdministrator(scope Construct, id *string, config OrganizationsDelegatedAdministratorConfig) OrganizationsDelegatedAdministrator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig">OrganizationsDelegatedAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig">OrganizationsDelegatedAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsdelegatedadministrator"

organizationsdelegatedadministrator.OrganizationsDelegatedAdministrator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsdelegatedadministrator"

organizationsdelegatedadministrator.OrganizationsDelegatedAdministrator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsdelegatedadministrator"

organizationsdelegatedadministrator.OrganizationsDelegatedAdministrator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate">DelegationEnabledDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod">JoinedMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp">JoinedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal">ServicePrincipal</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DelegationEnabledDate`<sup>Required</sup> <a name="DelegationEnabledDate" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate"></a>

```go
func DelegationEnabledDate() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `JoinedMethod`<sup>Required</sup> <a name="JoinedMethod" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod"></a>

```go
func JoinedMethod() *string
```

- *Type:* *string

---

##### `JoinedTimestamp`<sup>Required</sup> <a name="JoinedTimestamp" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp"></a>

```go
func JoinedTimestamp() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput"></a>

```go
func ServicePrincipalInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal"></a>

```go
func ServicePrincipal() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsDelegatedAdministratorConfig <a name="OrganizationsDelegatedAdministratorConfig" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/organizationsdelegatedadministrator"

&organizationsdelegatedadministrator.OrganizationsDelegatedAdministratorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ServicePrincipal: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal">ServicePrincipal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}.

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal"></a>

```go
ServicePrincipal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



