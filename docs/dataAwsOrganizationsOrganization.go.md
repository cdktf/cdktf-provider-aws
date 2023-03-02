# `dataAwsOrganizationsOrganization` Submodule <a name="`dataAwsOrganizationsOrganization` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganization <a name="DataAwsOrganizationsOrganization" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization aws_organizations_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganization(scope Construct, id *string, config DataAwsOrganizationsOrganizationConfig) DataAwsOrganizationsOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig">DataAwsOrganizationsOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig">DataAwsOrganizationsOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.DataAwsOrganizationsOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.DataAwsOrganizationsOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.DataAwsOrganizationsOrganization_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList">DataAwsOrganizationsOrganizationAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.awsServiceAccessPrincipals">AwsServiceAccessPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.enabledPolicyTypes">EnabledPolicyTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.featureSet">FeatureSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountArn">MasterAccountArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountEmail">MasterAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountId">MasterAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.nonMasterAccounts">NonMasterAccounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList">DataAwsOrganizationsOrganizationNonMasterAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.roots">Roots</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList">DataAwsOrganizationsOrganizationRootsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.accounts"></a>

```go
func Accounts() DataAwsOrganizationsOrganizationAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList">DataAwsOrganizationsOrganizationAccountsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsServiceAccessPrincipals`<sup>Required</sup> <a name="AwsServiceAccessPrincipals" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.awsServiceAccessPrincipals"></a>

```go
func AwsServiceAccessPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledPolicyTypes`<sup>Required</sup> <a name="EnabledPolicyTypes" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.enabledPolicyTypes"></a>

```go
func EnabledPolicyTypes() *[]*string
```

- *Type:* *[]*string

---

##### `FeatureSet`<sup>Required</sup> <a name="FeatureSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.featureSet"></a>

```go
func FeatureSet() *string
```

- *Type:* *string

---

##### `MasterAccountArn`<sup>Required</sup> <a name="MasterAccountArn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountArn"></a>

```go
func MasterAccountArn() *string
```

- *Type:* *string

---

##### `MasterAccountEmail`<sup>Required</sup> <a name="MasterAccountEmail" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountEmail"></a>

```go
func MasterAccountEmail() *string
```

- *Type:* *string

---

##### `MasterAccountId`<sup>Required</sup> <a name="MasterAccountId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountId"></a>

```go
func MasterAccountId() *string
```

- *Type:* *string

---

##### `NonMasterAccounts`<sup>Required</sup> <a name="NonMasterAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.nonMasterAccounts"></a>

```go
func NonMasterAccounts() DataAwsOrganizationsOrganizationNonMasterAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList">DataAwsOrganizationsOrganizationNonMasterAccountsList</a>

---

##### `Roots`<sup>Required</sup> <a name="Roots" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.roots"></a>

```go
func Roots() DataAwsOrganizationsOrganizationRootsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList">DataAwsOrganizationsOrganizationRootsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationAccounts <a name="DataAwsOrganizationsOrganizationAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

&dataawsorganizationsorganization.DataAwsOrganizationsOrganizationAccounts {

}
```


### DataAwsOrganizationsOrganizationConfig <a name="DataAwsOrganizationsOrganizationConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

&dataawsorganizationsorganization.DataAwsOrganizationsOrganizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOrganizationsOrganizationNonMasterAccounts <a name="DataAwsOrganizationsOrganizationNonMasterAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

&dataawsorganizationsorganization.DataAwsOrganizationsOrganizationNonMasterAccounts {

}
```


### DataAwsOrganizationsOrganizationRoots <a name="DataAwsOrganizationsOrganizationRoots" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

&dataawsorganizationsorganization.DataAwsOrganizationsOrganizationRoots {

}
```


### DataAwsOrganizationsOrganizationRootsPolicyTypes <a name="DataAwsOrganizationsOrganizationRootsPolicyTypes" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

&dataawsorganizationsorganization.DataAwsOrganizationsOrganizationRootsPolicyTypes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationAccountsList <a name="DataAwsOrganizationsOrganizationAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOrganizationsOrganizationAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get"></a>

```go
func Get(index *f64) DataAwsOrganizationsOrganizationAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOrganizationsOrganizationAccountsOutputReference <a name="DataAwsOrganizationsOrganizationAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOrganizationsOrganizationAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts">DataAwsOrganizationsOrganizationAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOrganizationsOrganizationAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts">DataAwsOrganizationsOrganizationAccounts</a>

---


### DataAwsOrganizationsOrganizationNonMasterAccountsList <a name="DataAwsOrganizationsOrganizationNonMasterAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationNonMasterAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOrganizationsOrganizationNonMasterAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get"></a>

```go
func Get(index *f64) DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference <a name="DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationNonMasterAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts">DataAwsOrganizationsOrganizationNonMasterAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOrganizationsOrganizationNonMasterAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts">DataAwsOrganizationsOrganizationNonMasterAccounts</a>

---


### DataAwsOrganizationsOrganizationRootsList <a name="DataAwsOrganizationsOrganizationRootsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationRootsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOrganizationsOrganizationRootsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get"></a>

```go
func Get(index *f64) DataAwsOrganizationsOrganizationRootsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOrganizationsOrganizationRootsOutputReference <a name="DataAwsOrganizationsOrganizationRootsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationRootsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOrganizationsOrganizationRootsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.policyTypes">PolicyTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList">DataAwsOrganizationsOrganizationRootsPolicyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots">DataAwsOrganizationsOrganizationRoots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyTypes`<sup>Required</sup> <a name="PolicyTypes" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.policyTypes"></a>

```go
func PolicyTypes() DataAwsOrganizationsOrganizationRootsPolicyTypesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList">DataAwsOrganizationsOrganizationRootsPolicyTypesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOrganizationsOrganizationRoots
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots">DataAwsOrganizationsOrganizationRoots</a>

---


### DataAwsOrganizationsOrganizationRootsPolicyTypesList <a name="DataAwsOrganizationsOrganizationRootsPolicyTypesList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationRootsPolicyTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOrganizationsOrganizationRootsPolicyTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get"></a>

```go
func Get(index *f64) DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference <a name="DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganization"

dataawsorganizationsorganization.NewDataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes">DataAwsOrganizationsOrganizationRootsPolicyTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOrganizationsOrganizationRootsPolicyTypes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes">DataAwsOrganizationsOrganizationRootsPolicyTypes</a>

---



