# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktf/provider-aws.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission aws_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdapermission"

lambdapermission.NewLambdaPermission(scope Construct, id *string, config LambdaPermissionConfig) LambdaPermission
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken">ResetEventSourceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">ResetFunctionUrlAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId">ResetPrincipalOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount">ResetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn">ResetSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementId">ResetStatementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix">ResetStatementIdPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEventSourceToken` <a name="ResetEventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```go
func ResetEventSourceToken()
```

##### `ResetFunctionUrlAuthType` <a name="ResetFunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```go
func ResetFunctionUrlAuthType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalOrgId` <a name="ResetPrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```go
func ResetPrincipalOrgId()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetQualifier"></a>

```go
func ResetQualifier()
```

##### `ResetSourceAccount` <a name="ResetSourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```go
func ResetSourceAccount()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```go
func ResetSourceArn()
```

##### `ResetStatementId` <a name="ResetStatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementId"></a>

```go
func ResetStatementId()
```

##### `ResetStatementIdPrefix` <a name="ResetStatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix"></a>

```go
func ResetStatementIdPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdapermission"

lambdapermission.LambdaPermission_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdapermission"

lambdapermission.LambdaPermission_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdapermission"

lambdapermission.LambdaPermission_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">EventSourceTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">FunctionUrlAuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput">PrincipalOrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput">SourceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput">SourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput">StatementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput">StatementIdPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken">EventSourceToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId">PrincipalOrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount">SourceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementId">StatementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EventSourceTokenInput`<sup>Optional</sup> <a name="EventSourceTokenInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```go
func EventSourceTokenInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `FunctionUrlAuthTypeInput`<sup>Optional</sup> <a name="FunctionUrlAuthTypeInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```go
func FunctionUrlAuthTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `PrincipalOrgIdInput`<sup>Optional</sup> <a name="PrincipalOrgIdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```go
func PrincipalOrgIdInput() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `SourceAccountInput`<sup>Optional</sup> <a name="SourceAccountInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```go
func SourceAccountInput() *string
```

- *Type:* *string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```go
func SourceArnInput() *string
```

- *Type:* *string

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput"></a>

```go
func StatementIdInput() *string
```

- *Type:* *string

---

##### `StatementIdPrefixInput`<sup>Optional</sup> <a name="StatementIdPrefixInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput"></a>

```go
func StatementIdPrefixInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `EventSourceToken`<sup>Required</sup> <a name="EventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```go
func EventSourceToken() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `FunctionUrlAuthType`<sup>Required</sup> <a name="FunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```go
func FunctionUrlAuthType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `PrincipalOrgId`<sup>Required</sup> <a name="PrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```go
func PrincipalOrgId() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `SourceAccount`<sup>Required</sup> <a name="SourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```go
func SourceAccount() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementId"></a>

```go
func StatementId() *string
```

- *Type:* *string

---

##### `StatementIdPrefix`<sup>Required</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix"></a>

```go
func StatementIdPrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdapermission"

&lambdapermission.LambdaPermissionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	FunctionName: *string,
	Principal: *string,
	EventSourceToken: *string,
	FunctionUrlAuthType: *string,
	Id: *string,
	PrincipalOrgId: *string,
	Qualifier: *string,
	SourceAccount: *string,
	SourceArn: *string,
	StatementId: *string,
	StatementIdPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">EventSourceToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">PrincipalOrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">SourceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn">SourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId">StatementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#action LambdaPermission#action}.

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal LambdaPermission#principal}.

---

##### `EventSourceToken`<sup>Optional</sup> <a name="EventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```go
EventSourceToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `FunctionUrlAuthType`<sup>Optional</sup> <a name="FunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```go
FunctionUrlAuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalOrgId`<sup>Optional</sup> <a name="PrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```go
PrincipalOrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `SourceAccount`<sup>Optional</sup> <a name="SourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```go
SourceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```go
SourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `StatementId`<sup>Optional</sup> <a name="StatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId"></a>

```go
StatementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `StatementIdPrefix`<sup>Optional</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix"></a>

```go
StatementIdPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---



