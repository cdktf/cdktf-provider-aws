# `dataAwsOrganizationsOrganizationalUnitDescendantAccounts` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitDescendantAccounts` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantAccounts <a name="DataAwsOrganizationsOrganizationalUnitDescendantAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_descendant_accounts aws_organizations_organizational_unit_descendant_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.NewDataAwsOrganizationsOrganizationalUnitDescendantAccounts(scope Construct, id *string, config DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig) DataAwsOrganizationsOrganizationalUnitDescendantAccounts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig">DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig">DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.accounts"></a>

```go
func Accounts() DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccounts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts <a name="DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

&dataawsorganizationsorganizationalunitdescendantaccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts {

}
```


### DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig <a name="DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

&dataawsorganizationsorganizationalunitdescendantaccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ParentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.parentId">ParentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_descendant_accounts#parent_id DataAwsOrganizationsOrganizationalUnitDescendantAccounts#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_descendant_accounts#id DataAwsOrganizationsOrganizationalUnitDescendantAccounts#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_descendant_accounts#parent_id DataAwsOrganizationsOrganizationalUnitDescendantAccounts#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_descendant_accounts#id DataAwsOrganizationsOrganizationalUnitDescendantAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList <a name="DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.NewDataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.get"></a>

```go
func Get(index *f64) DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference <a name="DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsorganizationsorganizationalunitdescendantaccounts"

dataawsorganizationsorganizationalunitdescendantaccounts.NewDataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts">DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantAccounts.DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts">DataAwsOrganizationsOrganizationalUnitDescendantAccountsAccounts</a>

---



