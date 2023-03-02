# `lambdaProvisionedConcurrencyConfig` Submodule <a name="`lambdaProvisionedConcurrencyConfig` Submodule" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaProvisionedConcurrencyConfig <a name="LambdaProvisionedConcurrencyConfig" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config aws_lambda_provisioned_concurrency_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

new lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig">LambdaProvisionedConcurrencyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig">LambdaProvisionedConcurrencyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdaProvisionedConcurrencyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput">provisionedConcurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaProvisionedConcurrencyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `provisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="provisionedConcurrentExecutionsInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput"></a>

```typescript
public readonly provisionedConcurrentExecutionsInput: number;
```

- *Type:* number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LambdaProvisionedConcurrencyConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> | cdktf.IResolvable

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaProvisionedConcurrencyConfigConfig <a name="LambdaProvisionedConcurrencyConfigConfig" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

const lambdaProvisionedConcurrencyConfigConfig: lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}.

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}.

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaProvisionedConcurrencyConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#timeouts LambdaProvisionedConcurrencyConfig#timeouts}

---

### LambdaProvisionedConcurrencyConfigTimeouts <a name="LambdaProvisionedConcurrencyConfigTimeouts" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

const lambdaProvisionedConcurrencyConfigTimeouts: lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaProvisionedConcurrencyConfigTimeoutsOutputReference <a name="LambdaProvisionedConcurrencyConfigTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/provider-aws'

new lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaProvisionedConcurrencyConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a> | cdktf.IResolvable

---



