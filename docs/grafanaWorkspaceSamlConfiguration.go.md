# `grafanaWorkspaceSamlConfiguration` Submodule <a name="`grafanaWorkspaceSamlConfiguration` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

grafanaworkspacesamlconfiguration.NewGrafanaWorkspaceSamlConfiguration(scope Construct, id *string, config GrafanaWorkspaceSamlConfigurationConfig) GrafanaWorkspaceSamlConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues">ResetAdminRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations">ResetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion">ResetEmailAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion">ResetGroupsAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl">ResetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml">ResetIdpMetadataXml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion">ResetLoginAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration">ResetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion">ResetNameAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion">ResetOrgAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion">ResetRoleAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value GrafanaWorkspaceSamlConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

---

##### `ResetAdminRoleValues` <a name="ResetAdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues"></a>

```go
func ResetAdminRoleValues()
```

##### `ResetAllowedOrganizations` <a name="ResetAllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations"></a>

```go
func ResetAllowedOrganizations()
```

##### `ResetEmailAssertion` <a name="ResetEmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion"></a>

```go
func ResetEmailAssertion()
```

##### `ResetGroupsAssertion` <a name="ResetGroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion"></a>

```go
func ResetGroupsAssertion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetIdpMetadataUrl` <a name="ResetIdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl"></a>

```go
func ResetIdpMetadataUrl()
```

##### `ResetIdpMetadataXml` <a name="ResetIdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml"></a>

```go
func ResetIdpMetadataXml()
```

##### `ResetLoginAssertion` <a name="ResetLoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion"></a>

```go
func ResetLoginAssertion()
```

##### `ResetLoginValidityDuration` <a name="ResetLoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration"></a>

```go
func ResetLoginValidityDuration()
```

##### `ResetNameAssertion` <a name="ResetNameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion"></a>

```go
func ResetNameAssertion()
```

##### `ResetOrgAssertion` <a name="ResetOrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion"></a>

```go
func ResetOrgAssertion()
```

##### `ResetRoleAssertion` <a name="ResetRoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion"></a>

```go
func ResetRoleAssertion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

grafanaworkspacesamlconfiguration.GrafanaWorkspaceSamlConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

grafanaworkspacesamlconfiguration.GrafanaWorkspaceSamlConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

grafanaworkspacesamlconfiguration.GrafanaWorkspaceSamlConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput">AdminRoleValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput">AllowedOrganizationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput">EditorRoleValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput">EmailAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput">GroupsAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput">IdpMetadataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput">IdpMetadataXmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput">LoginAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput">LoginValidityDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput">NameAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput">OrgAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput">RoleAssertionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues">AdminRoleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues">EditorRoleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion">EmailAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion">GroupsAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion">LoginAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion">NameAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion">OrgAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion">RoleAssertion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts"></a>

```go
func Timeouts() GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a>

---

##### `AdminRoleValuesInput`<sup>Optional</sup> <a name="AdminRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput"></a>

```go
func AdminRoleValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrganizationsInput`<sup>Optional</sup> <a name="AllowedOrganizationsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput"></a>

```go
func AllowedOrganizationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EditorRoleValuesInput`<sup>Optional</sup> <a name="EditorRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput"></a>

```go
func EditorRoleValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAssertionInput`<sup>Optional</sup> <a name="EmailAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput"></a>

```go
func EmailAssertionInput() *string
```

- *Type:* *string

---

##### `GroupsAssertionInput`<sup>Optional</sup> <a name="GroupsAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput"></a>

```go
func GroupsAssertionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpMetadataUrlInput`<sup>Optional</sup> <a name="IdpMetadataUrlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput"></a>

```go
func IdpMetadataUrlInput() *string
```

- *Type:* *string

---

##### `IdpMetadataXmlInput`<sup>Optional</sup> <a name="IdpMetadataXmlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput"></a>

```go
func IdpMetadataXmlInput() *string
```

- *Type:* *string

---

##### `LoginAssertionInput`<sup>Optional</sup> <a name="LoginAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput"></a>

```go
func LoginAssertionInput() *string
```

- *Type:* *string

---

##### `LoginValidityDurationInput`<sup>Optional</sup> <a name="LoginValidityDurationInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput"></a>

```go
func LoginValidityDurationInput() *f64
```

- *Type:* *f64

---

##### `NameAssertionInput`<sup>Optional</sup> <a name="NameAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput"></a>

```go
func NameAssertionInput() *string
```

- *Type:* *string

---

##### `OrgAssertionInput`<sup>Optional</sup> <a name="OrgAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput"></a>

```go
func OrgAssertionInput() *string
```

- *Type:* *string

---

##### `RoleAssertionInput`<sup>Optional</sup> <a name="RoleAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput"></a>

```go
func RoleAssertionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AdminRoleValues`<sup>Required</sup> <a name="AdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues"></a>

```go
func AdminRoleValues() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrganizations`<sup>Required</sup> <a name="AllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```go
func AllowedOrganizations() *[]*string
```

- *Type:* *[]*string

---

##### `EditorRoleValues`<sup>Required</sup> <a name="EditorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues"></a>

```go
func EditorRoleValues() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAssertion`<sup>Required</sup> <a name="EmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion"></a>

```go
func EmailAssertion() *string
```

- *Type:* *string

---

##### `GroupsAssertion`<sup>Required</sup> <a name="GroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion"></a>

```go
func GroupsAssertion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpMetadataUrl`<sup>Required</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl"></a>

```go
func IdpMetadataUrl() *string
```

- *Type:* *string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml"></a>

```go
func IdpMetadataXml() *string
```

- *Type:* *string

---

##### `LoginAssertion`<sup>Required</sup> <a name="LoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion"></a>

```go
func LoginAssertion() *string
```

- *Type:* *string

---

##### `LoginValidityDuration`<sup>Required</sup> <a name="LoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```go
func LoginValidityDuration() *f64
```

- *Type:* *f64

---

##### `NameAssertion`<sup>Required</sup> <a name="NameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion"></a>

```go
func NameAssertion() *string
```

- *Type:* *string

---

##### `OrgAssertion`<sup>Required</sup> <a name="OrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion"></a>

```go
func OrgAssertion() *string
```

- *Type:* *string

---

##### `RoleAssertion`<sup>Required</sup> <a name="RoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion"></a>

```go
func RoleAssertion() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceSamlConfigurationConfig <a name="GrafanaWorkspaceSamlConfigurationConfig" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

&grafanaworkspacesamlconfiguration.GrafanaWorkspaceSamlConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EditorRoleValues: *[]*string,
	WorkspaceId: *string,
	AdminRoleValues: *[]*string,
	AllowedOrganizations: *[]*string,
	EmailAssertion: *string,
	GroupsAssertion: *string,
	Id: *string,
	IdpMetadataUrl: *string,
	IdpMetadataXml: *string,
	LoginAssertion: *string,
	LoginValidityDuration: *f64,
	NameAssertion: *string,
	OrgAssertion: *string,
	RoleAssertion: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues">EditorRoleValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues">AdminRoleValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion">EmailAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion">GroupsAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion">LoginAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion">NameAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion">OrgAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion">RoleAssertion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EditorRoleValues`<sup>Required</sup> <a name="EditorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues"></a>

```go
EditorRoleValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `AdminRoleValues`<sup>Optional</sup> <a name="AdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues"></a>

```go
AdminRoleValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `AllowedOrganizations`<sup>Optional</sup> <a name="AllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations"></a>

```go
AllowedOrganizations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `EmailAssertion`<sup>Optional</sup> <a name="EmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion"></a>

```go
EmailAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `GroupsAssertion`<sup>Optional</sup> <a name="GroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion"></a>

```go
GroupsAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpMetadataUrl`<sup>Optional</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl"></a>

```go
IdpMetadataUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `IdpMetadataXml`<sup>Optional</sup> <a name="IdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml"></a>

```go
IdpMetadataXml *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `LoginAssertion`<sup>Optional</sup> <a name="LoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion"></a>

```go
LoginAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `LoginValidityDuration`<sup>Optional</sup> <a name="LoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration"></a>

```go
LoginValidityDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `NameAssertion`<sup>Optional</sup> <a name="NameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion"></a>

```go
NameAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `OrgAssertion`<sup>Optional</sup> <a name="OrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion"></a>

```go
OrgAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `RoleAssertion`<sup>Optional</sup> <a name="RoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion"></a>

```go
RoleAssertion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts"></a>

```go
Timeouts GrafanaWorkspaceSamlConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

### GrafanaWorkspaceSamlConfigurationTimeouts <a name="GrafanaWorkspaceSamlConfigurationTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

&grafanaworkspacesamlconfiguration.GrafanaWorkspaceSamlConfigurationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference <a name="GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspacesamlconfiguration"

grafanaworkspacesamlconfiguration.NewGrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



