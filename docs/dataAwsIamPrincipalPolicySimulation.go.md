# `data_aws_iam_principal_policy_simulation`

Refer to the Terraform Registory for docs: [`data_aws_iam_principal_policy_simulation`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation).

# `dataAwsIamPrincipalPolicySimulation` Submodule <a name="`dataAwsIamPrincipalPolicySimulation` Submodule" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPrincipalPolicySimulation <a name="DataAwsIamPrincipalPolicySimulation" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulation(scope Construct, id *string, config DataAwsIamPrincipalPolicySimulationConfig) DataAwsIamPrincipalPolicySimulation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig">DataAwsIamPrincipalPolicySimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig">DataAwsIamPrincipalPolicySimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext">PutContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson">ResetAdditionalPoliciesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn">ResetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson">ResetPermissionsBoundaryPoliciesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption">ResetResourceHandlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId">ResetResourceOwnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson">ResetResourcePolicyJson</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContext` <a name="PutContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext"></a>

```go
func PutContext(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalPoliciesJson` <a name="ResetAdditionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson"></a>

```go
func ResetAdditionalPoliciesJson()
```

##### `ResetCallerArn` <a name="ResetCallerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn"></a>

```go
func ResetCallerArn()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext"></a>

```go
func ResetContext()
```

##### `ResetPermissionsBoundaryPoliciesJson` <a name="ResetPermissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson"></a>

```go
func ResetPermissionsBoundaryPoliciesJson()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns"></a>

```go
func ResetResourceArns()
```

##### `ResetResourceHandlingOption` <a name="ResetResourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption"></a>

```go
func ResetResourceHandlingOption()
```

##### `ResetResourceOwnerAccountId` <a name="ResetResourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId"></a>

```go
func ResetResourceOwnerAccountId()
```

##### `ResetResourcePolicyJson` <a name="ResetResourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson"></a>

```go
func ResetResourcePolicyJson()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsIamPrincipalPolicySimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsIamPrincipalPolicySimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIamPrincipalPolicySimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed">AllAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context">Context</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results">Results</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput">ActionNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput">AdditionalPoliciesJsonInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput">CallerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput">ContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput">PermissionsBoundaryPoliciesJsonInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput">PolicySourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput">ResourceHandlingOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput">ResourceOwnerAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput">ResourcePolicyJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames">ActionNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson">AdditionalPoliciesJson</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn">CallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson">PermissionsBoundaryPoliciesJson</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn">PolicySourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption">ResourceHandlingOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId">ResourceOwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson">ResourcePolicyJson</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllAllowed`<sup>Required</sup> <a name="AllAllowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed"></a>

```go
func AllAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context"></a>

```go
func Context() DataAwsIamPrincipalPolicySimulationContextList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results"></a>

```go
func Results() DataAwsIamPrincipalPolicySimulationResultsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a>

---

##### `ActionNamesInput`<sup>Optional</sup> <a name="ActionNamesInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput"></a>

```go
func ActionNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalPoliciesJsonInput`<sup>Optional</sup> <a name="AdditionalPoliciesJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput"></a>

```go
func AdditionalPoliciesJsonInput() *[]*string
```

- *Type:* *[]*string

---

##### `CallerArnInput`<sup>Optional</sup> <a name="CallerArnInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput"></a>

```go
func CallerArnInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput"></a>

```go
func ContextInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsBoundaryPoliciesJsonInput`<sup>Optional</sup> <a name="PermissionsBoundaryPoliciesJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput"></a>

```go
func PermissionsBoundaryPoliciesJsonInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicySourceArnInput`<sup>Optional</sup> <a name="PolicySourceArnInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput"></a>

```go
func PolicySourceArnInput() *string
```

- *Type:* *string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceHandlingOptionInput`<sup>Optional</sup> <a name="ResourceHandlingOptionInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput"></a>

```go
func ResourceHandlingOptionInput() *string
```

- *Type:* *string

---

##### `ResourceOwnerAccountIdInput`<sup>Optional</sup> <a name="ResourceOwnerAccountIdInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput"></a>

```go
func ResourceOwnerAccountIdInput() *string
```

- *Type:* *string

---

##### `ResourcePolicyJsonInput`<sup>Optional</sup> <a name="ResourcePolicyJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput"></a>

```go
func ResourcePolicyJsonInput() *string
```

- *Type:* *string

---

##### `ActionNames`<sup>Required</sup> <a name="ActionNames" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames"></a>

```go
func ActionNames() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalPoliciesJson`<sup>Required</sup> <a name="AdditionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson"></a>

```go
func AdditionalPoliciesJson() *[]*string
```

- *Type:* *[]*string

---

##### `CallerArn`<sup>Required</sup> <a name="CallerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn"></a>

```go
func CallerArn() *string
```

- *Type:* *string

---

##### `PermissionsBoundaryPoliciesJson`<sup>Required</sup> <a name="PermissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson"></a>

```go
func PermissionsBoundaryPoliciesJson() *[]*string
```

- *Type:* *[]*string

---

##### `PolicySourceArn`<sup>Required</sup> <a name="PolicySourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn"></a>

```go
func PolicySourceArn() *string
```

- *Type:* *string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceHandlingOption`<sup>Required</sup> <a name="ResourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption"></a>

```go
func ResourceHandlingOption() *string
```

- *Type:* *string

---

##### `ResourceOwnerAccountId`<sup>Required</sup> <a name="ResourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId"></a>

```go
func ResourceOwnerAccountId() *string
```

- *Type:* *string

---

##### `ResourcePolicyJson`<sup>Required</sup> <a name="ResourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson"></a>

```go
func ResourcePolicyJson() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPrincipalPolicySimulationConfig <a name="DataAwsIamPrincipalPolicySimulationConfig" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

&dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionNames: *[]*string,
	PolicySourceArn: *string,
	AdditionalPoliciesJson: *[]*string,
	CallerArn: *string,
	Context: interface{},
	PermissionsBoundaryPoliciesJson: *[]*string,
	ResourceArns: *[]*string,
	ResourceHandlingOption: *string,
	ResourceOwnerAccountId: *string,
	ResourcePolicyJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames">ActionNames</a></code> | <code>*[]*string</code> | One or more names of actions, like "iam:CreateUser", that should be included in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn">PolicySourceArn</a></code> | <code>*string</code> | ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson">AdditionalPoliciesJson</a></code> | <code>*[]*string</code> | Additional principal-based policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn">CallerArn</a></code> | <code>*string</code> | ARN of a user to use as the caller of the simulated requests. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context">Context</a></code> | <code>interface{}</code> | context block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson">PermissionsBoundaryPoliciesJson</a></code> | <code>*[]*string</code> | Additional permission boundary policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | ARNs of specific resources to use as the targets of the specified actions during simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption">ResourceHandlingOption</a></code> | <code>*string</code> | Specifies the type of simulation to run. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId">ResourceOwnerAccountId</a></code> | <code>*string</code> | An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson">ResourcePolicyJson</a></code> | <code>*string</code> | A resource policy to associate with all of the target resources for simulation purposes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionNames`<sup>Required</sup> <a name="ActionNames" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames"></a>

```go
ActionNames *[]*string
```

- *Type:* *[]*string

One or more names of actions, like "iam:CreateUser", that should be included in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}

---

##### `PolicySourceArn`<sup>Required</sup> <a name="PolicySourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn"></a>

```go
PolicySourceArn *string
```

- *Type:* *string

ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}

---

##### `AdditionalPoliciesJson`<sup>Optional</sup> <a name="AdditionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson"></a>

```go
AdditionalPoliciesJson *[]*string
```

- *Type:* *[]*string

Additional principal-based policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}

---

##### `CallerArn`<sup>Optional</sup> <a name="CallerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn"></a>

```go
CallerArn *string
```

- *Type:* *string

ARN of a user to use as the caller of the simulated requests.

If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context"></a>

```go
Context interface{}
```

- *Type:* interface{}

context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}

---

##### `PermissionsBoundaryPoliciesJson`<sup>Optional</sup> <a name="PermissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson"></a>

```go
PermissionsBoundaryPoliciesJson *[]*string
```

- *Type:* *[]*string

Additional permission boundary policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

ARNs of specific resources to use as the targets of the specified actions during simulation.

If not specified, the simulator assumes "*" which represents general access across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}

---

##### `ResourceHandlingOption`<sup>Optional</sup> <a name="ResourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption"></a>

```go
ResourceHandlingOption *string
```

- *Type:* *string

Specifies the type of simulation to run.

Some API operations need a particular resource handling option in order to produce a correct reesult.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}

---

##### `ResourceOwnerAccountId`<sup>Optional</sup> <a name="ResourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId"></a>

```go
ResourceOwnerAccountId *string
```

- *Type:* *string

An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID.

Defaults to the account given as part of caller_arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}

---

##### `ResourcePolicyJson`<sup>Optional</sup> <a name="ResourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson"></a>

```go
ResourcePolicyJson *string
```

- *Type:* *string

A resource policy to associate with all of the target resources for simulation purposes.

The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}

---

### DataAwsIamPrincipalPolicySimulationContext <a name="DataAwsIamPrincipalPolicySimulationContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

&dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulationContext {
	Key: *string,
	Type: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key">Key</a></code> | <code>*string</code> | The key name of the context entry, such as "aws:CurrentTime". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type">Type</a></code> | <code>*string</code> | The type that the simulator should use to interpret the strings given in argument "values". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values">Values</a></code> | <code>*[]*string</code> | One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the context entry, such as "aws:CurrentTime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#key DataAwsIamPrincipalPolicySimulation#key}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type that the simulator should use to interpret the strings given in argument "values".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#type DataAwsIamPrincipalPolicySimulation#type}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/iam_principal_policy_simulation#values DataAwsIamPrincipalPolicySimulation#values}

---

### DataAwsIamPrincipalPolicySimulationResults <a name="DataAwsIamPrincipalPolicySimulationResults" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

&dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulationResults {

}
```


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatements <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

&dataawsiamprincipalpolicysimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPrincipalPolicySimulationContextList <a name="DataAwsIamPrincipalPolicySimulationContextList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIamPrincipalPolicySimulationContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get"></a>

```go
func Get(index *f64) DataAwsIamPrincipalPolicySimulationContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsIamPrincipalPolicySimulationContextOutputReference <a name="DataAwsIamPrincipalPolicySimulationContextOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIamPrincipalPolicySimulationContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsIamPrincipalPolicySimulationResultsList <a name="DataAwsIamPrincipalPolicySimulationResultsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIamPrincipalPolicySimulationResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get"></a>

```go
func Get(index *f64) DataAwsIamPrincipalPolicySimulationResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get"></a>

```go
func Get(index *f64) DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId">SourcePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType">SourcePolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePolicyId`<sup>Required</sup> <a name="SourcePolicyId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId"></a>

```go
func SourcePolicyId() *string
```

- *Type:* *string

---

##### `SourcePolicyType`<sup>Required</sup> <a name="SourcePolicyType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType"></a>

```go
func SourcePolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIamPrincipalPolicySimulationResultsMatchedStatements
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a>

---


### DataAwsIamPrincipalPolicySimulationResultsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsiamprincipalpolicysimulation"

dataawsiamprincipalpolicysimulation.NewDataAwsIamPrincipalPolicySimulationResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIamPrincipalPolicySimulationResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed">Allowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision">Decision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails">DecisionDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements">MatchedStatements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys">MissingContextKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Allowed`<sup>Required</sup> <a name="Allowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed"></a>

```go
func Allowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Decision`<sup>Required</sup> <a name="Decision" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision"></a>

```go
func Decision() *string
```

- *Type:* *string

---

##### `DecisionDetails`<sup>Required</sup> <a name="DecisionDetails" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails"></a>

```go
func DecisionDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MatchedStatements`<sup>Required</sup> <a name="MatchedStatements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements"></a>

```go
func MatchedStatements() DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a>

---

##### `MissingContextKeys`<sup>Required</sup> <a name="MissingContextKeys" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys"></a>

```go
func MissingContextKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIamPrincipalPolicySimulationResults
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a>

---



