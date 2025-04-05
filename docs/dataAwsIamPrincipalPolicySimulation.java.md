# `dataAwsIamPrincipalPolicySimulation` Submodule <a name="`dataAwsIamPrincipalPolicySimulation` Submodule" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPrincipalPolicySimulation <a name="DataAwsIamPrincipalPolicySimulation" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulation;

DataAwsIamPrincipalPolicySimulation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionNames(java.util.List<java.lang.String>)
    .policySourceArn(java.lang.String)
//  .additionalPoliciesJson(java.util.List<java.lang.String>)
//  .callerArn(java.lang.String)
//  .context(IResolvable)
//  .context(java.util.List<DataAwsIamPrincipalPolicySimulationContext>)
//  .permissionsBoundaryPoliciesJson(java.util.List<java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
//  .resourceHandlingOption(java.lang.String)
//  .resourceOwnerAccountId(java.lang.String)
//  .resourcePolicyJson(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.actionNames">actionNames</a></code> | <code>java.util.List<java.lang.String></code> | One or more names of actions, like "iam:CreateUser", that should be included in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.policySourceArn">policySourceArn</a></code> | <code>java.lang.String</code> | ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.additionalPoliciesJson">additionalPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | Additional principal-based policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.callerArn">callerArn</a></code> | <code>java.lang.String</code> | ARN of a user to use as the caller of the simulated requests. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.context">context</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>></code> | context block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.permissionsBoundaryPoliciesJson">permissionsBoundaryPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | Additional permission boundary policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of specific resources to use as the targets of the specified actions during simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceHandlingOption">resourceHandlingOption</a></code> | <code>java.lang.String</code> | Specifies the type of simulation to run. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceOwnerAccountId">resourceOwnerAccountId</a></code> | <code>java.lang.String</code> | An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourcePolicyJson">resourcePolicyJson</a></code> | <code>java.lang.String</code> | A resource policy to associate with all of the target resources for simulation purposes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionNames`<sup>Required</sup> <a name="actionNames" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.actionNames"></a>

- *Type:* java.util.List<java.lang.String>

One or more names of actions, like "iam:CreateUser", that should be included in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}

---

##### `policySourceArn`<sup>Required</sup> <a name="policySourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.policySourceArn"></a>

- *Type:* java.lang.String

ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}

---

##### `additionalPoliciesJson`<sup>Optional</sup> <a name="additionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.additionalPoliciesJson"></a>

- *Type:* java.util.List<java.lang.String>

Additional principal-based policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}

---

##### `callerArn`<sup>Optional</sup> <a name="callerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.callerArn"></a>

- *Type:* java.lang.String

ARN of a user to use as the caller of the simulated requests.

If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.context"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>>

context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}

---

##### `permissionsBoundaryPoliciesJson`<sup>Optional</sup> <a name="permissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.permissionsBoundaryPoliciesJson"></a>

- *Type:* java.util.List<java.lang.String>

Additional permission boundary policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of specific resources to use as the targets of the specified actions during simulation.

If not specified, the simulator assumes "*" which represents general access across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}

---

##### `resourceHandlingOption`<sup>Optional</sup> <a name="resourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceHandlingOption"></a>

- *Type:* java.lang.String

Specifies the type of simulation to run.

Some API operations need a particular resource handling option in order to produce a correct reesult.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}

---

##### `resourceOwnerAccountId`<sup>Optional</sup> <a name="resourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceOwnerAccountId"></a>

- *Type:* java.lang.String

An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID.

Defaults to the account given as part of caller_arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}

---

##### `resourcePolicyJson`<sup>Optional</sup> <a name="resourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourcePolicyJson"></a>

- *Type:* java.lang.String

A resource policy to associate with all of the target resources for simulation purposes.

The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext">putContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson">resetAdditionalPoliciesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn">resetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson">resetPermissionsBoundaryPoliciesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption">resetResourceHandlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId">resetResourceOwnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson">resetResourcePolicyJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContext` <a name="putContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext"></a>

```java
public void putContext(IResolvable OR java.util.List<DataAwsIamPrincipalPolicySimulationContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>>

---

##### `resetAdditionalPoliciesJson` <a name="resetAdditionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson"></a>

```java
public void resetAdditionalPoliciesJson()
```

##### `resetCallerArn` <a name="resetCallerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn"></a>

```java
public void resetCallerArn()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext"></a>

```java
public void resetContext()
```

##### `resetPermissionsBoundaryPoliciesJson` <a name="resetPermissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson"></a>

```java
public void resetPermissionsBoundaryPoliciesJson()
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns"></a>

```java
public void resetResourceArns()
```

##### `resetResourceHandlingOption` <a name="resetResourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption"></a>

```java
public void resetResourceHandlingOption()
```

##### `resetResourceOwnerAccountId` <a name="resetResourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId"></a>

```java
public void resetResourceOwnerAccountId()
```

##### `resetResourcePolicyJson` <a name="resetResourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson"></a>

```java
public void resetResourcePolicyJson()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulation;

DataAwsIamPrincipalPolicySimulation.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulation;

DataAwsIamPrincipalPolicySimulation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulation;

DataAwsIamPrincipalPolicySimulation.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulation;

DataAwsIamPrincipalPolicySimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsIamPrincipalPolicySimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsIamPrincipalPolicySimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsIamPrincipalPolicySimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIamPrincipalPolicySimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed">allAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context">context</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results">results</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput">actionNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput">additionalPoliciesJsonInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput">callerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput">contextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput">permissionsBoundaryPoliciesJsonInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput">policySourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput">resourceHandlingOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput">resourceOwnerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput">resourcePolicyJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames">actionNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson">additionalPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn">callerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson">permissionsBoundaryPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn">policySourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption">resourceHandlingOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId">resourceOwnerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson">resourcePolicyJson</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allAllowed`<sup>Required</sup> <a name="allAllowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed"></a>

```java
public IResolvable getAllAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context"></a>

```java
public DataAwsIamPrincipalPolicySimulationContextList getContext();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results"></a>

```java
public DataAwsIamPrincipalPolicySimulationResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a>

---

##### `actionNamesInput`<sup>Optional</sup> <a name="actionNamesInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput"></a>

```java
public java.util.List<java.lang.String> getActionNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalPoliciesJsonInput`<sup>Optional</sup> <a name="additionalPoliciesJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPoliciesJsonInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `callerArnInput`<sup>Optional</sup> <a name="callerArnInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput"></a>

```java
public java.lang.String getCallerArnInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput"></a>

```java
public java.lang.Object getContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>>

---

##### `permissionsBoundaryPoliciesJsonInput`<sup>Optional</sup> <a name="permissionsBoundaryPoliciesJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsBoundaryPoliciesJsonInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policySourceArnInput`<sup>Optional</sup> <a name="policySourceArnInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput"></a>

```java
public java.lang.String getPolicySourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceHandlingOptionInput`<sup>Optional</sup> <a name="resourceHandlingOptionInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput"></a>

```java
public java.lang.String getResourceHandlingOptionInput();
```

- *Type:* java.lang.String

---

##### `resourceOwnerAccountIdInput`<sup>Optional</sup> <a name="resourceOwnerAccountIdInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput"></a>

```java
public java.lang.String getResourceOwnerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `resourcePolicyJsonInput`<sup>Optional</sup> <a name="resourcePolicyJsonInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput"></a>

```java
public java.lang.String getResourcePolicyJsonInput();
```

- *Type:* java.lang.String

---

##### `actionNames`<sup>Required</sup> <a name="actionNames" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames"></a>

```java
public java.util.List<java.lang.String> getActionNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalPoliciesJson`<sup>Required</sup> <a name="additionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson"></a>

```java
public java.util.List<java.lang.String> getAdditionalPoliciesJson();
```

- *Type:* java.util.List<java.lang.String>

---

##### `callerArn`<sup>Required</sup> <a name="callerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn"></a>

```java
public java.lang.String getCallerArn();
```

- *Type:* java.lang.String

---

##### `permissionsBoundaryPoliciesJson`<sup>Required</sup> <a name="permissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson"></a>

```java
public java.util.List<java.lang.String> getPermissionsBoundaryPoliciesJson();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policySourceArn`<sup>Required</sup> <a name="policySourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn"></a>

```java
public java.lang.String getPolicySourceArn();
```

- *Type:* java.lang.String

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceHandlingOption`<sup>Required</sup> <a name="resourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption"></a>

```java
public java.lang.String getResourceHandlingOption();
```

- *Type:* java.lang.String

---

##### `resourceOwnerAccountId`<sup>Required</sup> <a name="resourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId"></a>

```java
public java.lang.String getResourceOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `resourcePolicyJson`<sup>Required</sup> <a name="resourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson"></a>

```java
public java.lang.String getResourcePolicyJson();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPrincipalPolicySimulationConfig <a name="DataAwsIamPrincipalPolicySimulationConfig" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationConfig;

DataAwsIamPrincipalPolicySimulationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionNames(java.util.List<java.lang.String>)
    .policySourceArn(java.lang.String)
//  .additionalPoliciesJson(java.util.List<java.lang.String>)
//  .callerArn(java.lang.String)
//  .context(IResolvable)
//  .context(java.util.List<DataAwsIamPrincipalPolicySimulationContext>)
//  .permissionsBoundaryPoliciesJson(java.util.List<java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
//  .resourceHandlingOption(java.lang.String)
//  .resourceOwnerAccountId(java.lang.String)
//  .resourcePolicyJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames">actionNames</a></code> | <code>java.util.List<java.lang.String></code> | One or more names of actions, like "iam:CreateUser", that should be included in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn">policySourceArn</a></code> | <code>java.lang.String</code> | ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson">additionalPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | Additional principal-based policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn">callerArn</a></code> | <code>java.lang.String</code> | ARN of a user to use as the caller of the simulated requests. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context">context</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>></code> | context block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson">permissionsBoundaryPoliciesJson</a></code> | <code>java.util.List<java.lang.String></code> | Additional permission boundary policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of specific resources to use as the targets of the specified actions during simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption">resourceHandlingOption</a></code> | <code>java.lang.String</code> | Specifies the type of simulation to run. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId">resourceOwnerAccountId</a></code> | <code>java.lang.String</code> | An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson">resourcePolicyJson</a></code> | <code>java.lang.String</code> | A resource policy to associate with all of the target resources for simulation purposes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionNames`<sup>Required</sup> <a name="actionNames" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames"></a>

```java
public java.util.List<java.lang.String> getActionNames();
```

- *Type:* java.util.List<java.lang.String>

One or more names of actions, like "iam:CreateUser", that should be included in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}

---

##### `policySourceArn`<sup>Required</sup> <a name="policySourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn"></a>

```java
public java.lang.String getPolicySourceArn();
```

- *Type:* java.lang.String

ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}

---

##### `additionalPoliciesJson`<sup>Optional</sup> <a name="additionalPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson"></a>

```java
public java.util.List<java.lang.String> getAdditionalPoliciesJson();
```

- *Type:* java.util.List<java.lang.String>

Additional principal-based policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}

---

##### `callerArn`<sup>Optional</sup> <a name="callerArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn"></a>

```java
public java.lang.String getCallerArn();
```

- *Type:* java.lang.String

ARN of a user to use as the caller of the simulated requests.

If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context"></a>

```java
public java.lang.Object getContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>>

context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}

---

##### `permissionsBoundaryPoliciesJson`<sup>Optional</sup> <a name="permissionsBoundaryPoliciesJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson"></a>

```java
public java.util.List<java.lang.String> getPermissionsBoundaryPoliciesJson();
```

- *Type:* java.util.List<java.lang.String>

Additional permission boundary policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of specific resources to use as the targets of the specified actions during simulation.

If not specified, the simulator assumes "*" which represents general access across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}

---

##### `resourceHandlingOption`<sup>Optional</sup> <a name="resourceHandlingOption" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption"></a>

```java
public java.lang.String getResourceHandlingOption();
```

- *Type:* java.lang.String

Specifies the type of simulation to run.

Some API operations need a particular resource handling option in order to produce a correct reesult.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}

---

##### `resourceOwnerAccountId`<sup>Optional</sup> <a name="resourceOwnerAccountId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId"></a>

```java
public java.lang.String getResourceOwnerAccountId();
```

- *Type:* java.lang.String

An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID.

Defaults to the account given as part of caller_arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}

---

##### `resourcePolicyJson`<sup>Optional</sup> <a name="resourcePolicyJson" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson"></a>

```java
public java.lang.String getResourcePolicyJson();
```

- *Type:* java.lang.String

A resource policy to associate with all of the target resources for simulation purposes.

The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}

---

### DataAwsIamPrincipalPolicySimulationContext <a name="DataAwsIamPrincipalPolicySimulationContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationContext;

DataAwsIamPrincipalPolicySimulationContext.builder()
    .key(java.lang.String)
    .type(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the context entry, such as "aws:CurrentTime". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type">type</a></code> | <code>java.lang.String</code> | The type that the simulator should use to interpret the strings given in argument "values". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the context entry, such as "aws:CurrentTime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#key DataAwsIamPrincipalPolicySimulation#key}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type that the simulator should use to interpret the strings given in argument "values".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#type DataAwsIamPrincipalPolicySimulation#type}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/iam_principal_policy_simulation#values DataAwsIamPrincipalPolicySimulation#values}

---

### DataAwsIamPrincipalPolicySimulationResults <a name="DataAwsIamPrincipalPolicySimulationResults" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResults;

DataAwsIamPrincipalPolicySimulationResults.builder()
    .build();
```


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatements <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements;

DataAwsIamPrincipalPolicySimulationResultsMatchedStatements.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPrincipalPolicySimulationContextList <a name="DataAwsIamPrincipalPolicySimulationContextList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationContextList;

new DataAwsIamPrincipalPolicySimulationContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get"></a>

```java
public DataAwsIamPrincipalPolicySimulationContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>>

---


### DataAwsIamPrincipalPolicySimulationContextOutputReference <a name="DataAwsIamPrincipalPolicySimulationContextOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationContextOutputReference;

new DataAwsIamPrincipalPolicySimulationContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>

---


### DataAwsIamPrincipalPolicySimulationResultsList <a name="DataAwsIamPrincipalPolicySimulationResultsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResultsList;

new DataAwsIamPrincipalPolicySimulationResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get"></a>

```java
public DataAwsIamPrincipalPolicySimulationResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList;

new DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get"></a>

```java
public DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference;

new DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId">sourcePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType">sourcePolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePolicyId`<sup>Required</sup> <a name="sourcePolicyId" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId"></a>

```java
public java.lang.String getSourcePolicyId();
```

- *Type:* java.lang.String

---

##### `sourcePolicyType`<sup>Required</sup> <a name="sourcePolicyType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType"></a>

```java
public java.lang.String getSourcePolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue"></a>

```java
public DataAwsIamPrincipalPolicySimulationResultsMatchedStatements getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a>

---


### DataAwsIamPrincipalPolicySimulationResultsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_principal_policy_simulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference;

new DataAwsIamPrincipalPolicySimulationResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed">allowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision">decision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails">decisionDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements">matchedStatements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys">missingContextKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed"></a>

```java
public IResolvable getAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision"></a>

```java
public java.lang.String getDecision();
```

- *Type:* java.lang.String

---

##### `decisionDetails`<sup>Required</sup> <a name="decisionDetails" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails"></a>

```java
public StringMap getDecisionDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `matchedStatements`<sup>Required</sup> <a name="matchedStatements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements"></a>

```java
public DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList getMatchedStatements();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a>

---

##### `missingContextKeys`<sup>Required</sup> <a name="missingContextKeys" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys"></a>

```java
public java.util.List<java.lang.String> getMissingContextKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue"></a>

```java
public DataAwsIamPrincipalPolicySimulationResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a>

---



