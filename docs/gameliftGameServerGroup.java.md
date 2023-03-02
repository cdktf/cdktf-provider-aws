# `gameliftGameServerGroup` Submodule <a name="`gameliftGameServerGroup` Submodule" id="@cdktf/provider-aws.gameliftGameServerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameServerGroup <a name="GameliftGameServerGroup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group aws_gamelift_game_server_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroup;

GameliftGameServerGroup.Builder.create(Construct scope, java.lang.String id)
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
    .gameServerGroupName(java.lang.String)
    .instanceDefinition(IResolvable)
    .instanceDefinition(java.util.List<GameliftGameServerGroupInstanceDefinition>)
    .launchTemplate(GameliftGameServerGroupLaunchTemplate)
    .maxSize(java.lang.Number)
    .minSize(java.lang.Number)
    .roleArn(java.lang.String)
//  .autoScalingPolicy(GameliftGameServerGroupAutoScalingPolicy)
//  .balancingStrategy(java.lang.String)
//  .gameServerProtectionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GameliftGameServerGroupTimeouts)
//  .vpcSubnets(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerGroupName">gameServerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.instanceDefinition">instanceDefinition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>></code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.autoScalingPolicy">autoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.balancingStrategy">balancingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerProtectionPolicy">gameServerProtectionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.vpcSubnets">vpcSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `instanceDefinition`<sup>Required</sup> <a name="instanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.instanceDefinition"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>>

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `autoScalingPolicy`<sup>Optional</sup> <a name="autoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.autoScalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `balancingStrategy`<sup>Optional</sup> <a name="balancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.balancingStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="gameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerProtectionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.vpcSubnets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy">putAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition">putInstanceDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy">resetAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy">resetBalancingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy">resetGameServerProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets">resetVpcSubnets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoScalingPolicy` <a name="putAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy"></a>

```java
public void putAutoScalingPolicy(GameliftGameServerGroupAutoScalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `putInstanceDefinition` <a name="putInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition"></a>

```java
public void putInstanceDefinition(IResolvable OR java.util.List<GameliftGameServerGroupInstanceDefinition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(GameliftGameServerGroupLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts"></a>

```java
public void putTimeouts(GameliftGameServerGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

---

##### `resetAutoScalingPolicy` <a name="resetAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy"></a>

```java
public void resetAutoScalingPolicy()
```

##### `resetBalancingStrategy` <a name="resetBalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy"></a>

```java
public void resetBalancingStrategy()
```

##### `resetGameServerProtectionPolicy` <a name="resetGameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy"></a>

```java
public void resetGameServerProtectionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSubnets` <a name="resetVpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets"></a>

```java
public void resetVpcSubnets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroup;

GameliftGameServerGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroup;

GameliftGameServerGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroup;

GameliftGameServerGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn">autoScalingGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy">autoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition">instanceDefinition</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput">autoScalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput">balancingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput">gameServerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput">gameServerProtectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput">instanceDefinitionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput">vpcSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy">balancingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName">gameServerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy">gameServerProtectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets">vpcSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupArn`<sup>Required</sup> <a name="autoScalingGroupArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn"></a>

```java
public java.lang.String getAutoScalingGroupArn();
```

- *Type:* java.lang.String

---

##### `autoScalingPolicy`<sup>Required</sup> <a name="autoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy"></a>

```java
public GameliftGameServerGroupAutoScalingPolicyOutputReference getAutoScalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a>

---

##### `instanceDefinition`<sup>Required</sup> <a name="instanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition"></a>

```java
public GameliftGameServerGroupInstanceDefinitionList getInstanceDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate"></a>

```java
public GameliftGameServerGroupLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts"></a>

```java
public GameliftGameServerGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a>

---

##### `autoScalingPolicyInput`<sup>Optional</sup> <a name="autoScalingPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput"></a>

```java
public GameliftGameServerGroupAutoScalingPolicy getAutoScalingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `balancingStrategyInput`<sup>Optional</sup> <a name="balancingStrategyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput"></a>

```java
public java.lang.String getBalancingStrategyInput();
```

- *Type:* java.lang.String

---

##### `gameServerGroupNameInput`<sup>Optional</sup> <a name="gameServerGroupNameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput"></a>

```java
public java.lang.String getGameServerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `gameServerProtectionPolicyInput`<sup>Optional</sup> <a name="gameServerProtectionPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput"></a>

```java
public java.lang.String getGameServerProtectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceDefinitionInput`<sup>Optional</sup> <a name="instanceDefinitionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput"></a>

```java
public java.lang.Object getInstanceDefinitionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>>

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput"></a>

```java
public GameliftGameServerGroupLaunchTemplate getLaunchTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcSubnetsInput`<sup>Optional</sup> <a name="vpcSubnetsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `balancingStrategy`<sup>Required</sup> <a name="balancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy"></a>

```java
public java.lang.String getBalancingStrategy();
```

- *Type:* java.lang.String

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName"></a>

```java
public java.lang.String getGameServerGroupName();
```

- *Type:* java.lang.String

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="gameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy"></a>

```java
public java.lang.String getGameServerProtectionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSubnets`<sup>Required</sup> <a name="vpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets"></a>

```java
public java.util.List<java.lang.String> getVpcSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameServerGroupAutoScalingPolicy <a name="GameliftGameServerGroupAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupAutoScalingPolicy;

GameliftGameServerGroupAutoScalingPolicy.builder()
    .targetTrackingConfiguration(GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration)
//  .estimatedInstanceWarmup(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}. |

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

```java
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration getTargetTrackingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;

GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.builder()
    .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

### GameliftGameServerGroupConfig <a name="GameliftGameServerGroupConfig" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupConfig;

GameliftGameServerGroupConfig.builder()
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
    .gameServerGroupName(java.lang.String)
    .instanceDefinition(IResolvable)
    .instanceDefinition(java.util.List<GameliftGameServerGroupInstanceDefinition>)
    .launchTemplate(GameliftGameServerGroupLaunchTemplate)
    .maxSize(java.lang.Number)
    .minSize(java.lang.Number)
    .roleArn(java.lang.String)
//  .autoScalingPolicy(GameliftGameServerGroupAutoScalingPolicy)
//  .balancingStrategy(java.lang.String)
//  .gameServerProtectionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GameliftGameServerGroupTimeouts)
//  .vpcSubnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName">gameServerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition">instanceDefinition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>></code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy">autoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy">balancingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy">gameServerProtectionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets">vpcSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName"></a>

```java
public java.lang.String getGameServerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `instanceDefinition`<sup>Required</sup> <a name="instanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition"></a>

```java
public java.lang.Object getInstanceDefinition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>>

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate"></a>

```java
public GameliftGameServerGroupLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `autoScalingPolicy`<sup>Optional</sup> <a name="autoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy"></a>

```java
public GameliftGameServerGroupAutoScalingPolicy getAutoScalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `balancingStrategy`<sup>Optional</sup> <a name="balancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy"></a>

```java
public java.lang.String getBalancingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="gameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy"></a>

```java
public java.lang.String getGameServerProtectionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts"></a>

```java
public GameliftGameServerGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets"></a>

```java
public java.util.List<java.lang.String> getVpcSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

### GameliftGameServerGroupInstanceDefinition <a name="GameliftGameServerGroupInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupInstanceDefinition;

GameliftGameServerGroupInstanceDefinition.builder()
    .instanceType(java.lang.String)
//  .weightedCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}.

---

### GameliftGameServerGroupLaunchTemplate <a name="GameliftGameServerGroupLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupLaunchTemplate;

GameliftGameServerGroupLaunchTemplate.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

### GameliftGameServerGroupTimeouts <a name="GameliftGameServerGroupTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupTimeouts;

GameliftGameServerGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameServerGroupAutoScalingPolicyOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupAutoScalingPolicyOutputReference;

new GameliftGameServerGroupAutoScalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration">putTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingConfiguration` <a name="putTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration"></a>

```java
public void putTargetTrackingConfiguration(GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup"></a>

```java
public void resetEstimatedInstanceWarmup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput">targetTrackingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration"></a>

```java
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference getTargetTrackingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput"></a>

```java
public java.lang.Number getEstimatedInstanceWarmupInput();
```

- *Type:* java.lang.Number

---

##### `targetTrackingConfigurationInput`<sup>Optional</sup> <a name="targetTrackingConfigurationInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput"></a>

```java
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration getTargetTrackingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue"></a>

```java
public GameliftGameServerGroupAutoScalingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---


### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference;

new GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```java
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---


### GameliftGameServerGroupInstanceDefinitionList <a name="GameliftGameServerGroupInstanceDefinitionList" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupInstanceDefinitionList;

new GameliftGameServerGroupInstanceDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get"></a>

```java
public GameliftGameServerGroupInstanceDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>>

---


### GameliftGameServerGroupInstanceDefinitionOutputReference <a name="GameliftGameServerGroupInstanceDefinitionOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupInstanceDefinitionOutputReference;

new GameliftGameServerGroupInstanceDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.String getWeightedCapacityInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a> OR com.hashicorp.cdktf.IResolvable

---


### GameliftGameServerGroupLaunchTemplateOutputReference <a name="GameliftGameServerGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupLaunchTemplateOutputReference;

new GameliftGameServerGroupLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue"></a>

```java
public GameliftGameServerGroupLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---


### GameliftGameServerGroupTimeoutsOutputReference <a name="GameliftGameServerGroupTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.gamelift_game_server_group.GameliftGameServerGroupTimeoutsOutputReference;

new GameliftGameServerGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



