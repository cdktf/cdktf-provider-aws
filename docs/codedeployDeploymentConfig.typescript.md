# `codedeployDeploymentConfig` Submodule <a name="`codedeployDeploymentConfig` Submodule" id="@cdktf/provider-aws.codedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentConfig <a name="CodedeployDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config aws_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

new codedeployDeploymentConfig.CodedeployDeploymentConfig(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig">CodedeployDeploymentConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig">CodedeployDeploymentConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts">putMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig">putTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform">resetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts">resetMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig">resetTrafficRoutingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMinimumHealthyHosts` <a name="putMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts"></a>

```typescript
public putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `putTrafficRoutingConfig` <a name="putTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig"></a>

```typescript
public putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `resetComputePlatform` <a name="resetComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform"></a>

```typescript
public resetComputePlatform(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimumHealthyHosts` <a name="resetMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts"></a>

```typescript
public resetMinimumHealthyHosts(): void
```

##### `resetTrafficRoutingConfig` <a name="resetTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig"></a>

```typescript
public resetTrafficRoutingConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId">deploymentConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput">computePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput">minimumHealthyHostsInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput">trafficRoutingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform">computePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentConfigId`<sup>Required</sup> <a name="deploymentConfigId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId"></a>

```typescript
public readonly deploymentConfigId: string;
```

- *Type:* string

---

##### `minimumHealthyHosts`<sup>Required</sup> <a name="minimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```typescript
public readonly minimumHealthyHosts: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `trafficRoutingConfig`<sup>Required</sup> <a name="trafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```typescript
public readonly trafficRoutingConfig: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `computePlatformInput`<sup>Optional</sup> <a name="computePlatformInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput"></a>

```typescript
public readonly computePlatformInput: string;
```

- *Type:* string

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput"></a>

```typescript
public readonly deploymentConfigNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minimumHealthyHostsInput`<sup>Optional</sup> <a name="minimumHealthyHostsInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput"></a>

```typescript
public readonly minimumHealthyHostsInput: CodedeployDeploymentConfigMinimumHealthyHosts;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `trafficRoutingConfigInput`<sup>Optional</sup> <a name="trafficRoutingConfigInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput"></a>

```typescript
public readonly trafficRoutingConfigInput: CodedeployDeploymentConfigTrafficRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentConfigConfig <a name="CodedeployDeploymentConfigConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

const codedeployDeploymentConfigConfig: codedeployDeploymentConfig.CodedeployDeploymentConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform">computePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | minimum_healthy_hosts block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | traffic_routing_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}.

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="minimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts"></a>

```typescript
public readonly minimumHealthyHosts: CodedeployDeploymentConfigMinimumHealthyHosts;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

minimum_healthy_hosts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig"></a>

```typescript
public readonly trafficRoutingConfig: CodedeployDeploymentConfigTrafficRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

traffic_routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

### CodedeployDeploymentConfigMinimumHealthyHosts <a name="CodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

const codedeployDeploymentConfigMinimumHealthyHosts: codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

### CodedeployDeploymentConfigTrafficRoutingConfig <a name="CodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

const codedeployDeploymentConfigTrafficRoutingConfig: codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | time_based_canary block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | time_based_linear block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |

---

##### `timeBasedCanary`<sup>Optional</sup> <a name="timeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary"></a>

```typescript
public readonly timeBasedCanary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

time_based_canary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}

---

##### `timeBasedLinear`<sup>Optional</sup> <a name="timeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear"></a>

```typescript
public readonly timeBasedLinear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

time_based_linear block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

const codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary: codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage">percentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

const codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear: codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage">percentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="CodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

new codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentConfigMinimumHealthyHosts;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

new codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary">putTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear">putTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary">resetTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear">resetTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedCanary` <a name="putTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary"></a>

```typescript
public putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `putTimeBasedLinear` <a name="putTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear"></a>

```typescript
public putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `resetTimeBasedCanary` <a name="resetTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary"></a>

```typescript
public resetTimeBasedCanary(): void
```

##### `resetTimeBasedLinear` <a name="resetTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear"></a>

```typescript
public resetTimeBasedLinear(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput">timeBasedCanaryInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput">timeBasedLinearInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeBasedCanary`<sup>Required</sup> <a name="timeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```typescript
public readonly timeBasedCanary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `timeBasedLinear`<sup>Required</sup> <a name="timeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```typescript
public readonly timeBasedLinear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `timeBasedCanaryInput`<sup>Optional</sup> <a name="timeBasedCanaryInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput"></a>

```typescript
public readonly timeBasedCanaryInput: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `timeBasedLinearInput`<sup>Optional</sup> <a name="timeBasedLinearInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput"></a>

```typescript
public readonly timeBasedLinearInput: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentConfigTrafficRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

new codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentConfig } from '@cdktf/provider-aws'

new codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---



