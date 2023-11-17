# `aws_cloudwatch_event_endpoint`

Refer to the Terraform Registory for docs: [`aws_cloudwatch_event_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint).

# `cloudwatchEventEndpoint` Submodule <a name="`cloudwatchEventEndpoint` Submodule" id="@cdktf/provider-aws.cloudwatchEventEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventEndpoint <a name="CloudwatchEventEndpoint" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpoint(scope: Construct, id: string, config: CloudwatchEventEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig">CloudwatchEventEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig">CloudwatchEventEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus">putEventBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig">putReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig">putRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig">resetReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putEventBus` <a name="putEventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus"></a>

```typescript
public putEventBus(value: IResolvable | CloudwatchEventEndpointEventBus[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]

---

##### `putReplicationConfig` <a name="putReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig"></a>

```typescript
public putReplicationConfig(value: CloudwatchEventEndpointReplicationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---

##### `putRoutingConfig` <a name="putRoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig"></a>

```typescript
public putRoutingConfig(value: CloudwatchEventEndpointRoutingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReplicationConfig` <a name="resetReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig"></a>

```typescript
public resetReplicationConfig(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchEventEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchEventEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus">eventBus</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig">replicationConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput">eventBusInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput">replicationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput">routingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus"></a>

```typescript
public readonly eventBus: CloudwatchEventEndpointEventBusList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a>

---

##### `replicationConfig`<sup>Required</sup> <a name="replicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig"></a>

```typescript
public readonly replicationConfig: CloudwatchEventEndpointReplicationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a>

---

##### `routingConfig`<sup>Required</sup> <a name="routingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig"></a>

```typescript
public readonly routingConfig: CloudwatchEventEndpointRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventBusInput`<sup>Optional</sup> <a name="eventBusInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput"></a>

```typescript
public readonly eventBusInput: IResolvable | CloudwatchEventEndpointEventBus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicationConfigInput`<sup>Optional</sup> <a name="replicationConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput"></a>

```typescript
public readonly replicationConfigInput: CloudwatchEventEndpointReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `routingConfigInput`<sup>Optional</sup> <a name="routingConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput"></a>

```typescript
public readonly routingConfigInput: CloudwatchEventEndpointRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventEndpointConfig <a name="CloudwatchEventEndpointConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointConfig: cloudwatchEventEndpoint.CloudwatchEventEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus">eventBus</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]</code> | event_bus block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | routing_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig">replicationConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | replication_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus"></a>

```typescript
public readonly eventBus: IResolvable | CloudwatchEventEndpointEventBus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]

event_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}.

---

##### `routingConfig`<sup>Required</sup> <a name="routingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig"></a>

```typescript
public readonly routingConfig: CloudwatchEventEndpointRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationConfig`<sup>Optional</sup> <a name="replicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig"></a>

```typescript
public readonly replicationConfig: CloudwatchEventEndpointReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}.

---

### CloudwatchEventEndpointEventBus <a name="CloudwatchEventEndpointEventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointEventBus: cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}. |

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}.

---

### CloudwatchEventEndpointReplicationConfig <a name="CloudwatchEventEndpointReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointReplicationConfig: cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}.

---

### CloudwatchEventEndpointRoutingConfig <a name="CloudwatchEventEndpointRoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointRoutingConfig: cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | failover_config block. |

---

##### `failoverConfig`<sup>Required</sup> <a name="failoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: CloudwatchEventEndpointRoutingConfigFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfig <a name="CloudwatchEventEndpointRoutingConfigFailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointRoutingConfigFailoverConfig: cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary">secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | secondary block. |

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary"></a>

```typescript
public readonly primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary"></a>

```typescript
public readonly secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

secondary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointRoutingConfigFailoverConfigPrimary: cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck">healthCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}. |

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}.

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

const cloudwatchEventEndpointRoutingConfigFailoverConfigSecondary: cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route">route</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}. |

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventEndpointEventBusList <a name="CloudwatchEventEndpointEventBusList" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get"></a>

```typescript
public get(index: number): CloudwatchEventEndpointEventBusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventEndpointEventBus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>[]

---


### CloudwatchEventEndpointEventBusOutputReference <a name="CloudwatchEventEndpointEventBusOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput"></a>

```typescript
public readonly eventBusArnInput: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventEndpointEventBus;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>

---


### CloudwatchEventEndpointReplicationConfigOutputReference <a name="CloudwatchEventEndpointReplicationConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventEndpointReplicationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary">putPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary">putSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimary` <a name="putPrimary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary"></a>

```typescript
public putPrimary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `putSecondary` <a name="putSecondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary"></a>

```typescript
public putSecondary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput">primaryInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput">secondaryInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```typescript
public readonly primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```typescript
public readonly secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `secondaryInput`<sup>Optional</sup> <a name="secondaryInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput"></a>

```typescript
public readonly secondaryInput: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventEndpointRoutingConfigFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute">resetRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute"></a>

```typescript
public resetRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput">routeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput"></a>

```typescript
public readonly routeInput: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---


### CloudwatchEventEndpointRoutingConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventEndpoint } from '@cdktf/provider-aws'

new cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig">putFailoverConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailoverConfig` <a name="putFailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig"></a>

```typescript
public putFailoverConfig(value: CloudwatchEventEndpointRoutingConfigFailoverConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput">failoverConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverConfig`<sup>Required</sup> <a name="failoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `failoverConfigInput`<sup>Optional</sup> <a name="failoverConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput"></a>

```typescript
public readonly failoverConfigInput: CloudwatchEventEndpointRoutingConfigFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventEndpointRoutingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---



