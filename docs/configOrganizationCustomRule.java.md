# `configOrganizationCustomRule` Submodule <a name="`configOrganizationCustomRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomRule <a name="ConfigOrganizationCustomRule" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule aws_config_organization_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRule;

ConfigOrganizationCustomRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lambdaFunctionArn(java.lang.String)
    .name(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.lambdaFunctionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.triggerTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.inputParameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceIdScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.resourceTypesScope"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagKeyScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.tagValueScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts"></a>

```java
public void putTimeouts(ConfigOrganizationCustomRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts"></a>

```java
public void resetExcludedAccounts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId"></a>

```java
public void resetId()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRule;

ConfigOrganizationCustomRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRule;

ConfigOrganizationCustomRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRule;

ConfigOrganizationCustomRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput">triggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts"></a>

```java
public ConfigOrganizationCustomRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput"></a>

```java
public java.lang.String getLambdaFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomRuleConfig <a name="ConfigOrganizationCustomRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRuleConfig;

ConfigOrganizationCustomRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lambdaFunctionArn(java.lang.String)
    .name(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts"></a>

```java
public ConfigOrganizationCustomRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

### ConfigOrganizationCustomRuleTimeouts <a name="ConfigOrganizationCustomRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRuleTimeouts;

ConfigOrganizationCustomRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_rule.ConfigOrganizationCustomRuleTimeoutsOutputReference;

new ConfigOrganizationCustomRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



