# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktf/provider-aws.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace aws_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.NewGrafanaWorkspace(scope Construct, id *string, config GrafanaWorkspaceConfig) GrafanaWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">ResetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">ResetOrganizationRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">ResetStackSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value GrafanaWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value GrafanaWorkspaceVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```go
func ResetDataSources()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```go
func ResetName()
```

##### `ResetNotificationDestinations` <a name="ResetNotificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```go
func ResetNotificationDestinations()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```

##### `ResetOrganizationRoleName` <a name="ResetOrganizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```go
func ResetOrganizationRoleName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetStackSetName` <a name="ResetStackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```go
func ResetStackSetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.GrafanaWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.GrafanaWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.GrafanaWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">GrafanaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">SamlConfigurationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">AccountAccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">AuthenticationProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">DataSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">NotificationDestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">OrganizationRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">StackSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">AccountAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">AuthenticationProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources">DataSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">NotificationDestinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">OrganizationRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType">PermissionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">StackSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `GrafanaVersion`<sup>Required</sup> <a name="GrafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```go
func GrafanaVersion() *string
```

- *Type:* *string

---

##### `SamlConfigurationStatus`<sup>Required</sup> <a name="SamlConfigurationStatus" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```go
func SamlConfigurationStatus() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts"></a>

```go
func Timeouts() GrafanaWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```go
func VpcConfiguration() GrafanaWorkspaceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `AccountAccessTypeInput`<sup>Optional</sup> <a name="AccountAccessTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```go
func AccountAccessTypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationProvidersInput`<sup>Optional</sup> <a name="AuthenticationProvidersInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```go
func AuthenticationProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```go
func DataSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationDestinationsInput`<sup>Optional</sup> <a name="NotificationDestinationsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```go
func NotificationDestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationRoleNameInput`<sup>Optional</sup> <a name="OrganizationRoleNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```go
func OrganizationRoleNameInput() *string
```

- *Type:* *string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```go
func PermissionTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StackSetNameInput`<sup>Optional</sup> <a name="StackSetNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```go
func StackSetNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() GrafanaWorkspaceVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `AccountAccessType`<sup>Required</sup> <a name="AccountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```go
func AccountAccessType() *string
```

- *Type:* *string

---

##### `AuthenticationProviders`<sup>Required</sup> <a name="AuthenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```go
func AuthenticationProviders() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```go
func DataSources() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationDestinations`<sup>Required</sup> <a name="NotificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```go
func NotificationDestinations() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationRoleName`<sup>Required</sup> <a name="OrganizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```go
func OrganizationRoleName() *string
```

- *Type:* *string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```go
func PermissionType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```go
func StackSetName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

&grafanaworkspace.GrafanaWorkspaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountAccessType: *string,
	AuthenticationProviders: *[]*string,
	PermissionType: *string,
	Configuration: *string,
	DataSources: *[]*string,
	Description: *string,
	Id: *string,
	Name: *string,
	NotificationDestinations: *[]*string,
	OrganizationalUnits: *[]*string,
	OrganizationRoleName: *string,
	RoleArn: *string,
	StackSetName: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.grafanaWorkspace.GrafanaWorkspaceTimeouts,
	VpcConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">AccountAccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">AuthenticationProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">PermissionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#permission_type GrafanaWorkspace#permission_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration">Configuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#configuration GrafanaWorkspace#configuration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">DataSources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#data_sources GrafanaWorkspace#data_sources}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#description GrafanaWorkspace#description}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#id GrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#name GrafanaWorkspace#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">NotificationDestinations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">OrganizationRoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#role_arn GrafanaWorkspace#role_arn}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">StackSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags GrafanaWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags_all GrafanaWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountAccessType`<sup>Required</sup> <a name="AccountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```go
AccountAccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}.

---

##### `AuthenticationProviders`<sup>Required</sup> <a name="AuthenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```go
AuthenticationProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}.

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```go
PermissionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#permission_type GrafanaWorkspace#permission_type}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#configuration GrafanaWorkspace#configuration}.

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```go
DataSources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#data_sources GrafanaWorkspace#data_sources}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#description GrafanaWorkspace#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#id GrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#name GrafanaWorkspace#name}.

---

##### `NotificationDestinations`<sup>Optional</sup> <a name="NotificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```go
NotificationDestinations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}.

---

##### `OrganizationRoleName`<sup>Optional</sup> <a name="OrganizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```go
OrganizationRoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#role_arn GrafanaWorkspace#role_arn}.

---

##### `StackSetName`<sup>Optional</sup> <a name="StackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```go
StackSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags GrafanaWorkspace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#tags_all GrafanaWorkspace#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts"></a>

```go
Timeouts GrafanaWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#timeouts GrafanaWorkspace#timeouts}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```go
VpcConfiguration GrafanaWorkspaceVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceTimeouts <a name="GrafanaWorkspaceTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

&grafanaworkspace.GrafanaWorkspaceTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#create GrafanaWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#update GrafanaWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#create GrafanaWorkspace#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#update GrafanaWorkspace#update}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

&grafanaworkspace.GrafanaWorkspaceVpcConfiguration {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceTimeoutsOutputReference <a name="GrafanaWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.NewGrafanaWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrafanaWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspace"

grafanaworkspace.NewGrafanaWorkspaceVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrafanaWorkspaceVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GrafanaWorkspaceVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



