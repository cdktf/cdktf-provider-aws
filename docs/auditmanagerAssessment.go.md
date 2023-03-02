# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktf/provider-aws.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment aws_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessment(scope Construct, id *string, config AuditmanagerAssessmentConfig) AuditmanagerAssessment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">PutAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">ResetAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAssessmentReportsDestination` <a name="PutAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```go
func PutAssessmentReportsDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```go
func PutRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```go
func PutScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssessmentReportsDestination` <a name="ResetAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```go
func ResetAssessmentReportsDestination()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.AuditmanagerAssessment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.AuditmanagerAssessment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.AuditmanagerAssessment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">AssessmentReportsDestination</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll">RolesAll</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">AssessmentReportsDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">FrameworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">RolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">FrameworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssessmentReportsDestination`<sup>Required</sup> <a name="AssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```go
func AssessmentReportsDestination() AuditmanagerAssessmentAssessmentReportsDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```go
func Roles() AuditmanagerAssessmentRolesList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `RolesAll`<sup>Required</sup> <a name="RolesAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll"></a>

```go
func RolesAll() AuditmanagerAssessmentRolesAllList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```go
func Scope() AuditmanagerAssessmentScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AssessmentReportsDestinationInput`<sup>Optional</sup> <a name="AssessmentReportsDestinationInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```go
func AssessmentReportsDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FrameworkIdInput`<sup>Optional</sup> <a name="FrameworkIdInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```go
func FrameworkIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```go
func RolesInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```go
func FrameworkId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentAssessmentReportsDestination {
	Destination: *string,
	DestinationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}.

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}.

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FrameworkId: *string,
	Name: *string,
	Roles: interface{},
	AssessmentReportsDestination: interface{},
	Description: *string,
	Scope: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">FrameworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">Roles</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">AssessmentReportsDestination</a></code> | <code>interface{}</code> | assessment_reports_destination block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">Scope</a></code> | <code>interface{}</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```go
FrameworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```go
Roles interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}.

---

##### `AssessmentReportsDestination`<sup>Optional</sup> <a name="AssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```go
AssessmentReportsDestination interface{}
```

- *Type:* interface{}

assessment_reports_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```go
Scope interface{}
```

- *Type:* interface{}

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}.

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentRoles {
	RoleArn: *string,
	RoleType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">RoleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}.

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```go
RoleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}.

---

### AuditmanagerAssessmentRolesAll <a name="AuditmanagerAssessmentRolesAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentRolesAll {

}
```


### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentScope {
	AwsAccounts: interface{},
	AwsServices: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">AwsAccounts</a></code> | <code>interface{}</code> | aws_accounts block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">AwsServices</a></code> | <code>interface{}</code> | aws_services block. |

---

##### `AwsAccounts`<sup>Optional</sup> <a name="AwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```go
AwsAccounts interface{}
```

- *Type:* interface{}

aws_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `AwsServices`<sup>Optional</sup> <a name="AwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```go
AwsServices interface{}
```

- *Type:* interface{}

aws_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentScopeAwsAccounts {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

&auditmanagerassessment.AuditmanagerAssessmentScopeAwsServices {
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationList <a name="AuditmanagerAssessmentAssessmentReportsDestinationList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentAssessmentReportsDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentAssessmentReportsDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentAssessmentReportsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentAssessmentReportsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentAssessmentReportsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentRolesAllList <a name="AuditmanagerAssessmentRolesAllList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentRolesAllList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentRolesAllList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentRolesAllOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AuditmanagerAssessmentRolesAllOutputReference <a name="AuditmanagerAssessmentRolesAllOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentRolesAllOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentRolesAllOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType">RoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType"></a>

```go
func RoleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue"></a>

```go
func InternalValue() AuditmanagerAssessmentRolesAll
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">RoleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">RoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```go
func RoleTypeInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```go
func RoleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeAwsAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentScopeAwsAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentScopeAwsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeAwsAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentScopeAwsAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeAwsServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentScopeAwsServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentScopeAwsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeAwsServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentScopeAwsServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeList <a name="AuditmanagerAssessmentScopeList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/auditmanagerassessment"

auditmanagerassessment.NewAuditmanagerAssessmentScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">PutAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">PutAwsServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">ResetAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">ResetAwsServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccounts` <a name="PutAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```go
func PutAwsAccounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAwsServices` <a name="PutAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```go
func PutAwsServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsAccounts` <a name="ResetAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```go
func ResetAwsAccounts()
```

##### `ResetAwsServices` <a name="ResetAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```go
func ResetAwsServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">AwsAccounts</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">AwsServices</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">AwsAccountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">AwsServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```go
func AwsAccounts() AuditmanagerAssessmentScopeAwsAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `AwsServices`<sup>Required</sup> <a name="AwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```go
func AwsServices() AuditmanagerAssessmentScopeAwsServicesList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `AwsAccountsInput`<sup>Optional</sup> <a name="AwsAccountsInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```go
func AwsAccountsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsServicesInput`<sup>Optional</sup> <a name="AwsServicesInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```go
func AwsServicesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



