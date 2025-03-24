# `dataAwsBedrockagentAgentVersions` Submodule <a name="`dataAwsBedrockagentAgentVersions` Submodule" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockagentAgentVersions <a name="DataAwsBedrockagentAgentVersions" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.NewDataAwsBedrockagentAgentVersions(scope Construct, id *string, config DataAwsBedrockagentAgentVersionsConfig) DataAwsBedrockagentAgentVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries">PutAgentVersionSummaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries">ResetAgentVersionSummaries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAgentVersionSummaries` <a name="PutAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries"></a>

```go
func PutAgentVersionSummaries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentVersionSummaries` <a name="ResetAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries"></a>

```go
func ResetAgentVersionSummaries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsBedrockagentAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries">AgentVersionSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput">AgentVersionSummariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AgentVersionSummaries`<sup>Required</sup> <a name="AgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries"></a>

```go
func AgentVersionSummaries() DataAwsBedrockagentAgentVersionsAgentVersionSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `AgentVersionSummariesInput`<sup>Optional</sup> <a name="AgentVersionSummariesInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput"></a>

```go
func AgentVersionSummariesInput() interface{}
```

- *Type:* interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummaries <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

&dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries {
	GuardrailConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code>interface{}</code> | guardrail_configuration block. |

---

##### `GuardrailConfiguration`<sup>Optional</sup> <a name="GuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration"></a>

```go
GuardrailConfiguration interface{}
```

- *Type:* interface{}

guardrail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}

---

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

&dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration {

}
```


### DataAwsBedrockagentAgentVersionsConfig <a name="DataAwsBedrockagentAgentVersionsConfig" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

&dataawsbedrockagentagentversions.DataAwsBedrockagentAgentVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentId: *string,
	AgentVersionSummaries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId">AgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries">AgentVersionSummaries</a></code> | <code>interface{}</code> | agent_version_summaries block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}.

---

##### `AgentVersionSummaries`<sup>Optional</sup> <a name="AgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries"></a>

```go
AgentVersionSummaries interface{}
```

- *Type:* interface{}

agent_version_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.NewDataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.NewDataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```go
func GuardrailIdentifier() *string
```

- *Type:* *string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```go
func GuardrailVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.NewDataAwsBedrockagentAgentVersionsAgentVersionSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockagentAgentVersionsAgentVersionSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get"></a>

```go
func Get(index *f64) DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbedrockagentagentversions"

dataawsbedrockagentagentversions.NewDataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration">PutGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration">ResetGuardrailConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuardrailConfiguration` <a name="PutGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration"></a>

```go
func PutGuardrailConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuardrailConfiguration` <a name="ResetGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration"></a>

```go
func ResetGuardrailConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName">AgentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput">GuardrailConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName"></a>

```go
func AgentName() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration"></a>

```go
func GuardrailConfiguration() DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `GuardrailConfigurationInput`<sup>Optional</sup> <a name="GuardrailConfigurationInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput"></a>

```go
func GuardrailConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



