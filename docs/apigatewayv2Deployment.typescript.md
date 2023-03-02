# `apigatewayv2Deployment` Submodule <a name="`apigatewayv2Deployment` Submodule" id="@cdktf/provider-aws.apigatewayv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Deployment <a name="Apigatewayv2Deployment" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment aws_apigatewayv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer"></a>

```typescript
import { apigatewayv2Deployment } from '@cdktf/provider-aws'

new apigatewayv2Deployment.Apigatewayv2Deployment(scope: Construct, id: string, config: Apigatewayv2DeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig">Apigatewayv2DeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig">Apigatewayv2DeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isConstruct"></a>

```typescript
import { apigatewayv2Deployment } from '@cdktf/provider-aws'

apigatewayv2Deployment.Apigatewayv2Deployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformElement"></a>

```typescript
import { apigatewayv2Deployment } from '@cdktf/provider-aws'

apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformResource"></a>

```typescript
import { apigatewayv2Deployment } from '@cdktf/provider-aws'

apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.autoDeployed">autoDeployed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoDeployed`<sup>Required</sup> <a name="autoDeployed" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.autoDeployed"></a>

```typescript
public readonly autoDeployed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2Deployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DeploymentConfig <a name="Apigatewayv2DeploymentConfig" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.Initializer"></a>

```typescript
import { apigatewayv2Deployment } from '@cdktf/provider-aws'

const apigatewayv2DeploymentConfig: apigatewayv2Deployment.Apigatewayv2DeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#api_id Apigatewayv2Deployment#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#description Apigatewayv2Deployment#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#id Apigatewayv2Deployment#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#triggers Apigatewayv2Deployment#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#api_id Apigatewayv2Deployment#api_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#description Apigatewayv2Deployment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#id Apigatewayv2Deployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.apigatewayv2Deployment.Apigatewayv2DeploymentConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment#triggers Apigatewayv2Deployment#triggers}.

---



